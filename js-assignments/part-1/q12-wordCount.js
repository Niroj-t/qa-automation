function wordCount(sentence) {
  const counts = {};
  for (const word of sentence.split(' ')) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}
console.log(wordCount('a b a c b a'));