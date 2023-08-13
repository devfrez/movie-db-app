export const Icon = ({ fill, width, height }) => {
  return (`
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M15 15L21 21" stroke="${fill}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="${fill}" stroke-width="2">
        </path>
      </g>
    </svg>
  `);
};
