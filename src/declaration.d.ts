declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.mov' {
  const value: string;
  export default value;
}
declare module '*.mp3' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module 'lodash/uniqBy' {
  import { uniqBy } from 'lodash';
  export default uniqBy;
}

declare module 'lodash/uniqWith' {
  import { uniqWith } from 'lodash';
  export default uniqWith;
}
