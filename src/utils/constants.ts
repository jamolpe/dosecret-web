export const URLS = {
  SELECTED_SECRET: '/secret/:uuid',
  CREATED_SECRET: '/secret/created/:uuid',
  CREATE_SECRET: '/secret/create'
};

const processString = (string: string, variables: Record<string, string>) => {
  return string.replace(/:[^/]+/g, (match) => {
    const paramName = match.slice(1); // remove the leading ':'
    return variables[paramName] || match; // return the param value or the original match
  });
};

/**
 * Process strings with keys (keys must be {0}{1} in the string template and will be processed in order)
 * @param string
 * @param keys
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const processTemplate = (
  string: string,
  keys: Record<string, string>
) => {
  return processString(string, keys);
};
