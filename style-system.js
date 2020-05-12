

const margin = ({ m }) => {
  if (m === undefined) return null;
  return `margin: ${m}`;
}

const marginTop = (mt) => {
  if (mt === undefined) return null;
  return `margin-top: ${mt}`;
}

const marginRight = ({ mr }) => {
  if (mr === undefined) return null;
  return `margin-right: ${mr}`;
}

const marginBottom = ({ mb }) => {
  if (mb === undefined) return null;
  return `margin-bottom: ${mb}`;
}

const marginLeft = ({ ml }) => {
  if (ml === undefined) return null;
  return `margin-left: ${ml}`;
}

const padding = ({ p }) => {
  if (p === undefined) return null;
  return `padding: ${p}`;
}

const paddingTop = ({ pt }) => {
  if (pt === undefined) return null;
  return `padding-top: ${pt}`;
}

const paddingRight = ({ pr }) => {
  if (pr === undefined) return null;
  return `padding-right: ${pr}`;
}

const paddingBottom = ({ pb }) => {
  if (pb === undefined) return null;
  return `padding-bottom: ${pb}`;
}

const paddingLeft = (pl) => {
  if (pl === undefined) return null;
  return `padding-left: ${pl}`;
}

const backgroung = ({ bg }) => {
  if (bg === undefined) return null;
  return `background: ${bg}`;
}

const color = ({ c }) => {
  if (c === undefined) return null;
  return `color: ${c}`;
}

const width = ({ w }) => {
  if (w === undefined) return null;
  return `width: ${w}`;
}

const height = ({ h }) => {
  if (h === undefined) return null;
  return `height: ${h}`;
}

export const propsToCss = (props) => {
  return [margin, marginTop, marginRight, marginBottom, marginLeft,
    padding, paddingTop, paddingRight, paddingBottom, paddingLeft,
    backgroung, color, width, height].map(f => f(props)).filter(s => s !== null).join(' ;');
}
