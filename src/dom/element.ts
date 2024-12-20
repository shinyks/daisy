/**
 * Get the element
 * @param query he query you want to find
 * @param parentElement The parent of the element you want to find
 * @returns The element that matches the query
 */
export const get = (query: string, parentElement?: HTMLElement): HTMLElement | null => {
  return (parentElement || document).querySelector(query);
};

/**
 * Get all elements
 * @param query The query you want to find
 * @param parentElement The parent of the element you want to find
 * @returns The elements that matches the query
 */
export const getAll = (query: string, parentElement?: HTMLElement): HTMLElement[] => {
  return Array.from((parentElement || document).querySelectorAll(query));
};

/**
 * Get the element with id
 * @param elementId The id of the element you want to find
 * @param parentElement The parent of the element you want to find
 * @returns The element that matches the id
 */
export const getById = (elementId: string, parentElement?: HTMLElement): HTMLElement | null => {
  return get(`#${elementId}`, parentElement);
};

/**
 * Create element
 * @param tag The tag of the element
 * @param className The class name of the element
 * @param id The id of the element
 * @param namespace The namespace of the element
 * @returns New element
 */
export const create = (tag: string = 'div', className: string = '', id: string = '', namespace: string = ''): HTMLElement => {
  const element = namespace === '' ? document.createElement(tag) : document.createElementNS(namespace, tag) as HTMLElement;

  if (id.length !== 0) {
    element.id = id;
  }

  if (className.length !== 0) {
    className.split(' ').forEach((name) => name.length !== 0 && element.classList.add(name));
  }

  return element;
};

/**
 * Append element
 * @param targetElement Element to append to parent
 * @param parentElement Parent element
 * @param index Append index
 */
export const append = (targetElement: HTMLElement, parentElement?: HTMLElement, index?: number): void => {
  const parent = (parentElement || document.body);

  if (index === undefined) {
    parent.appendChild(targetElement);
  } else {
    parent.insertBefore(targetElement, parent.children[index]);
  }
};

/**
 * Remove element
 * @param targetElement Element to remove
 */
export const remove = (targetElement: HTMLElement): void => {
  targetElement.remove();
};

/**
 * Remove all children
 * @param parentElement Parent element to remove all children
 */
export const removeAllChild = (parentElement: HTMLElement): void => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

/**
 * Get the value of an attribute on an element
 * @param element The element to manipulate
 * @param key The name of the attribute key
 * @returns The value of the attribute
 */
export const getAttr = (element: HTMLElement, key: string): string | null => {
  return element.getAttribute(key);
};

/**
 * Set the attribute of an element
 * @param element The element to set the attribute on
 * @param key The name of the attribute you want to set
 * @param value he value to set the attribute to
 */
export const setAttr = (element: HTMLElement, key: string, value: string): void => {
  element.setAttribute(key, value);
};

/**
 * Set the inner text of an element
 * @param element The element to set the text
 * @param value Text
 */
export const setText = (element: HTMLElement, value: string): void => {
  element.innerText = value;
};

/**
 * Set the inner HTML of an element
 * @param element The element to set the HTML
 * @param value HTML string
 */
export const setHtml = (element: HTMLElement, value: string): void => {
  element.innerHTML = value;
};

/**
 * Add Style to dom
 * @param value Style string
 */
export const addStyle = (value: string): void => {
  if (!value || value.length === 0) {
    return;
  }

  const styles = getAll('style', document.head);

  for (const style of styles) {
    if (style.innerText === value) {
      return;
    }
  }

  const styleElement = create('style');

  setHtml(styleElement, value);
  append(styleElement, document.head);
};

/**
 * Create HTMLImageElement asynchronously
 * @param src Image source path
 * @param untilDecode Image source path
 * @returns HTMLImageElement object
 */
export const createImage = async (src: string, untilDecode: boolean = false): Promise<HTMLImageElement> => {
  return await (untilDecode ? createImageWithDecode(src) : createImageWithOnload(src));
};

/**
 * Create HTMLImageElement asynchronously with decode method
 * @param src Image source path
 * @returns HTMLImageElement object
 */
export const createImageWithDecode = async (src: string): Promise<HTMLImageElement> => {
  const imageElement = new Image();

  imageElement.src = src;
  await imageElement.decode();

  return imageElement;
};

/**
 * Create HTMLImageElement asynchronously with onload method
 * @param src Image source path
 * @returns HTMLImageElement object
 */
export const createImageWithOnload = async (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const imageElement = new Image();

    imageElement.onload = (): void => resolve(imageElement);
    imageElement.onerror = reject;
    imageElement.src = src;
  });
};

export const createAudioBuffer = async (src: string): Promise<AudioBuffer> => {
  return fetch(src)
    .then(res => res.arrayBuffer())
    .then(arrayBuffer => (new AudioContext()).decodeAudioData(arrayBuffer));
};
