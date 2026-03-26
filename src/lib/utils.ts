export function toSlug(inputString: string): string {
  const dictionary = new Map();
  dictionary.set(' ', '-');
  dictionary.set('á', 'a');
  dictionary.set('é', 'e');
  dictionary.set('í', 'i');
  dictionary.set('ó', 'o');
  dictionary.set('ú', 'u');
  dictionary.set('ñ', 'n');

  let slug = inputString.toLowerCase();

  for (const [key, value] of dictionary) {
    slug.replace("/${key}/g", value);
  }

  return slug;
}

