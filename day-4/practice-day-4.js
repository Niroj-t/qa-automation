//Synchronous vs Asynchronous

async function syncVsAsync() {
  console.log("1. Start");
  setTimeout(() => console.log("2. Page loaded"), 2000);
  console.log("3. Click button");
  // Prints: 1, 3, then (2s later) 2
}
topic1_syncVsAsync();

//The event loop
// (sync first -> microtasks (promises) -> macrotasks (timers)) 
async function eventLoop(){
    console.log("A");
    setTimeout(() => console.log("B"),0);
    Promise.resolve().then(() => console.log("C"));
    console.log("D")  
}
eventLoop();

//Building a Promise
function makeMomo() {
  console.log("Order received");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Momo is ready");
    }, 3000);
  });
}

async function buildPromise() {
  async function order() {
    const result = await makeMomo();
    console.log(result);
  }
  await order();
}
buildPromise();

//resolve vs reject + try/catch
function makeMomoWithStock(inStock) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inStock) resolve("Momo is ready");
      else reject(new Error("Out of momo"));
    }, 2000);
  });
}

async function rejectAndCatch() {
  async function order() {
    try {
      console.log(await makeMomoWithStock(true));
      console.log(await makeMomoWithStock(false));
    } catch (e) {
      console.log(`Order failed: ${e.message}`);
    }
  }
  await order();
}
rejectAndCatch();

//async / await syntax
async function asyncAwaitSyntax() {
  // --- Rule 1: defining a function does not run it -------------------
  async function greet() {
    console.log("Namaste");
  }
  // nothing prints yet: defining a function does not run it
  greet(); // NOW it prints: Namaste

  // --- Rule 2: await only works inside an async function -------------
  // function bad() {
  //   await something();   // SyntaxError
  // }
  // async function good() {
  //   await something();   // fine
  // }

  // --- An async function always returns a Promise --------------------
  async function getNumber() {
    return 5;
  }
  console.log(getNumber());          // Promise { 5 }  <- not 5!
     // 5  (unwrapped)
}
asyncAwaitSyntax();

// TOPIC 6 · Proof await doesn't block 
// The counter runs while the momo cooks.

async function doesNotBlock() {
  async function order() {
    const momo = makeMomo(); //// started, no await yet
    //const momo = await makeMomo();

    let count = 0;
    const timer = setInterval(() => {
      count++;
      console.log(`Waiting... ${count}s`);
    }, 1000);

    const result = await momo;   // NOW we wait
    clearInterval(timer);
    console.log(result);
  }
  await order();
}
doesNotBlock();

// The missing-await bug
// Stand-ins for loadPage / clickButton so the bug is visible in Node.
//const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function loadPage() {
  console.log("  page loaded");
}
async function clickButton() {
  console.log("  button clicked");
}

async function missingAwait() {
  // missing await: page is not loaded yet
  async function badTest() {
    loadPage();
    clickButton();   // flaky failure — runs BEFORE the page finishes loading
  }

  // correct
  async function goodTest() {
    await loadPage();
    await clickButton();
  }

  console.log("badTest (no await):");
  await badTest();

  console.log("goodTest (with await):");
  await goodTest();
}
missingAwait();

//// await has no timeout of its own 
// No code on the slide — the timeouts come from playwright.config.ts:
//
//   Action (click, fill)     -> no limit; configurable
//   Navigation (goto)        -> 30 seconds
//   expect() assertion       -> 5 seconds
//   Whole test               -> 30 seconds

// The anti-pattern: hard waits
// Needs Playwright (`page` comes from the test fixture), so this is
// shown as a reference, not run in plain Node:
//
//   // hard wait: always 5s, even if ready in 200ms
//   await page.waitForTimeout(5000);
//   await page.click("#submit");
//
//   // wait for the real condition instead
//   await page.click("#submit");
//   await expect(page.locator(".success")).toBeVisible();

//  Running promises together
// fetchA / fetchB / fetchFeed / timeout are stand-ins so this runs.

const fetchA = () =>
  new Promise((resolve) => setTimeout(() => resolve("A"), 300));

const fetchB = () =>
  new Promise((resolve) => setTimeout(() => resolve("B"), 500));

const fetchFeed = () =>
  new Promise((resolve) => setTimeout(() => resolve("feed data"), 1000));

const fetchBad = () =>
  new Promise((_, reject) => setTimeout(() => reject(new Error("bad record")), 200));

const timeout = (ms) =>
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timed out")), ms));

async function promiseCombinators() {
  // Promise.all: waits for all; rejects if any one rejects
  const [a, b] = await Promise.all([fetchA(), fetchB()]);
  console.log("all:", a, b);

  // Promise.race: settles with whichever finishes first
  try {
    const data = await Promise.race([fetchFeed(), timeout(3000)]);
    console.log("race:", data);
  } catch (e) {
    console.log("race failed:", e.message);
  }

  // Promise.allSettled: waits for every one and never rejects
  const results = await Promise.allSettled([fetchA(), fetchBad()]);
  console.log("allSettled:", results);
}

promiseCombinators();





