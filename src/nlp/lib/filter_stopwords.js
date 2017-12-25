/**
 * 1. Remove stopwords
 * @param {array} arrWords - array of words (tokens)
 * @return {array} array of words (tokens) with stopwords excluded
 */
var removeStopwords = function(arrWords) {
  // var arrWords = getTokens(sentence.toLowerCase());
  return arrWords.filter(word => !removeStopwords.stopwords.has(word)); // take set difference.
}

/**
 * 2. Stopwords list, built from lists including Stanford NLP, Journal of Machine Learning, etc.
 */
removeStopwords.stopwords = new Set(['page',
// 'ca',
// "n't",
// "'s",
'a',
'able',
'about',
'above',
'according',
'accordingly',
'across',
'actually',
'after',
'afterwards',
'again',
'against',
'ain',
"ain't",
'all',
'allow',
'allows',
'almost',
'alone',
'along',
'already',
'also',
'although',
'always',
'am',
'among',
'amongst',
'an',
'and',
'another',
'any',
'anybody',
'anyhow',
'anyone',
'anything',
'anyway',
'anyways',
'anywhere',
'apart',
'appear',
'appreciate',
'appropriate',
'are',
'aren',
"aren't",
'arent',
'around',
'as',
'aside',
'ask',
'asking',
'associated',
'at',
'available',
'away',
'awfully',
'b',
'be',
'became',
'because',
'become',
'becomes',
'becoming',
'been',
'before',
'beforehand',
'behind',
'being',
'believe',
'below',
'beside',
'besides',
'best',
'better',
'between',
'beyond',
'both',
'brief',
'but',
'by',
'c',
"c'mon",
"c's",
'came',
'can',
"can't",
'cannot',
'cant',
'cause',
'causes',
'certain',
'certainly',
'changes',
'clearly',
'co',
'com',
'come',
'comes',
'concerning',
'consequently',
'consider',
'considering',
'contain',
'containing',
'contains',
'corresponding',
'could',
'couldn',
"couldn't",
'couldnt',
'course',
'currently',
'd',
'definitely',
'described',
'despite',
'did',
'didn',
"didn't",
'didnt',
'different',
'do',
'does',
'doesn',
"doesn't",
'doesnt',
'doing',
'don',
"don't",
'done',
'dont',
'down',
'downwards',
'during',
'e',
'each',
'edu',
'eg',
'eight',
'either',
'else',
'elsewhere',
'enough',
'entirely',
'especially',
'et',
'etc',
'even',
'ever',
'every',
'everybody',
'everyone',
'everything',
'everywhere',
'ex',
'exactly',
'example',
'except',
'f',
'far',
'few',
'fifth',
'first',
'five',
'followed',
'following',
'follows',
'for',
'former',
'formerly',
'forth',
'four',
'from',
'further',
'furthermore',
'g',
'get',
'gets',
'getting',
'given',
'gives',
'go',
'goes',
'going',
'gone',
'got',
'gotten',
'h',
'had',
'hadn',
"hadn't",
'hadnt',
'happens',
'hardly',
'has',
'hasn',
"hasn't",
'hasnt',
'have',
'haven',
"haven't",
'havent',
'having',
'he',
"he'd",
"he'll",
"he's",
'hello',
'help',
'hence',
'her',
'here',
"here's",
'hereafter',
'hereby',
'herein',
'heres',
'hereupon',
'hers',
'herself',
'hes',
'hi',
'him',
'himself',
'his',
'hither',
'hopefully',
'how',
"how's",
'howbeit',
'however',
'hows',
'i',
"i'd",
"i'll",
"i'm",
"i've",
'ie',
'if',
'ignored',
'im',
'immediate',
'in',
'inasmuch',
'inc',
'indeed',
'indicate',
'indicated',
'indicates',
'inner',
'insofar',
'instead',
'into',
'inward',
'is',
'isn',
"isn't",
'isnt',
'it',
"it'd",
"it'll",
"it's",
'its',
'itself',
'j',
'just',
'k',
'keep',
'keeps',
'kept',
'know',
'known',
'knows',
'l',
'last',
'lately',
'later',
'latter',
'latterly',
'least',
'less',
'lest',
'let',
"let's",
'lets',
'like',
'liked',
'likely',
'little',
'll',
'look',
'looking',
'looks',
'ltd',
'm',
'mainly',
'many',
'may',
'maybe',
'me',
'mean',
'meanwhile',
'merely',
'might',
'mightn',
'more',
'moreover',
'most',
'mostly',
'much',
'must',
'mustn',
"mustn't",
'mustnt',
'my',
'myself',
'n',
'name',
'namely',
'near',
'nearly',
'necessary',
'need',
'needn',
'needs',
'neither',
'never',
'nevertheless',
// 'new', i.e. New York
'next',
'nine',
'no',
'nobody',
'non',
'none',
'noone',
'nor',
'normally',
'not',
'nothing',
'now',
'nowhere',
'o',
'obviously',
'of',
'off',
'often',
'oh',
'ok',
'okay',
'old',
'on',
'once',
'one',
'ones',
'only',
'onto',
'or',
'other',
'others',
'otherwise',
'ought',
'our',
'ours',
'ourselves',
'out',
'outside',
'over',
'overall',
'own',
'p',
'particular',
'particularly',
'per',
'perhaps',
'placed',
'please',
'plus',
'possible',
'presumably',
'probably',
'provides',
'q',
'que',
'quite',
'r',
'rather',
're',
'really',
'reasonably',
'regarding',
'regardless',
'regards',
'relatively',
'respectively',
'return',
'right',
's',
'said',
'same',
'saw',
'say',
'saying',
'says',
'second',
'secondly',
'see',
'seeing',
'seem',
'seemed',
'seeming',
'seems',
'seen',
'self',
'selves',
'sensible',
'sent',
'serious',
'seriously',
'seven',
'several',
'shall',
'shan',
"shan't",
'shant',
'she',
"she'd",
"she'll",
"she's",
'shes',
'should',
'shouldn',
"shouldn't",
'shouldnt',
'since',
'six',
'so',
'some',
'somebody',
'somehow',
'someone',
'something',
'sometime',
'sometimes',
'somewhat',
'somewhere',
'soon',
'sorry',
'specified',
'specify',
'specifying',
'still',
'sub',
'such',
'sup',
'sure',
't',
"t's",
'take',
'taken',
'tell',
'tends',
'than',
'thank',
'thanks',
'thanx',
'that',
"that's",
'thats',
'the',
'their',
'theirs',
'them',
'themselves',
'then',
'thence',
'there',
"there's",
'thereafter',
'thereby',
'therefore',
'therein',
'theres',
'thereupon',
'these',
'they',
"they'd",
"they'll",
"they're",
"they've",
'theyll',
'theyre',
'theyve',
'think',
'third',
'this',
'thorough',
'thoroughly',
'those',
'though',
'three',
'through',
'throughout',
'thru',
'thus',
'to',
'together',
'too',
'took',
'toward',
'towards',
'tried',
'tries',
'truly',
'try',
'trying',
'twice',
'two',
'u',
'un',
'under',
'unfortunately',
'unless',
'unlikely',
'until',
'unto',
'up',
'upon',
'us',
'use',
'used',
'useful',
'uses',
'using',
'usually',
'v',
// 'value', phrases such as "missing value" can be informative
'various',
've',
'very',
'via',
'viz',
'vs',
'w',
'want',
'wants',
'was',
'wasn',
"wasn't",
'wasnt',
'way',
'we',
"we'd",
"we'll",
"we're",
"we've",
'welcome',
'well',
'went',
'were',
'weren',
"weren't",
'werent',
'what',
"what's",
'whatever',
'whats',
'when',
"when's",
'whence',
'whenever',
'whens',
'where',
"where's",
'whereafter',
'whereas',
'whereby',
'wherein',
'wheres',
'whereupon',
'wherever',
'whether',
'which',
'while',
'whither',
'who',
"who's",
'whoever',
'whole',
'whom',
'whos',
'whose',
'why',
"why's",
'whys',
'will',
'willing',
'wish',
'with',
'within',
'without',
'won',
"won't",
'wonder',
'wont',
'would',
'wouldn',
"wouldn't",
'wouldnt',
'x',
'y',
'yes',
'yet',
'you',
"you'd",
"you're",
"you'll",
"you've",
'youd',
'youll',
'your',
'youre',
'yours',
'yourself',
'yourselves',
'youve',
'z']);

module.exports = removeStopwords;
