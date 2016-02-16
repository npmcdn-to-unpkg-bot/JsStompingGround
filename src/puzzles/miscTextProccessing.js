import {log} from '../utils';

const paragraph = `In a word, the whale was seized and sold, and his Grace the Duke of Wellington received the money. Thinking that viewed in some particular lights, the case might by a bare possibility in some small degree be deemed, under the circumstances, a rather hard one, an honest clergyman of the town respectfully addressed a note to his Grace, begging him to take the case of those unfortunate mariners into full consideration. To which my Lord Duke in substance replied (both letters were published) that he had already done so, and received the money, and would be obliged to the reverend gentleman if for the future he (the reverend gentleman) would decline meddling with other people's business. Is this the still militant old man, standing at the corners of the three kingdoms, on all hands coercing alms of beggars?`;
const terminators = /[.|!|?]/;
const punctuation = /[^a-z0-9]$/;

// given a paragraph, reverse the order of words in each sentence.
function reverseWords(p) {
  return p.split(terminators).reduce((result, sentence) => {
    let words = sentence.split(/[\s]/g);
    words = words.map(w => {
      while(w.search(punctuation) >= 0) {
        w = w.slice(-1) + w.slice(0, -1);
      }
      return w;
    });

    result.push('.' + words.reverse().join(' '));
    return result;
  }, []).join(' ');
}

log(`Given:\n${paragraph}\n\nResult:\n${reverseWords(paragraph)}`);
