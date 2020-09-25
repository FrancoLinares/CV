import React from "react";
import PropTypes from "prop-types";
// Component
import IconContainer from "./IconContainer";
// SVG
import ReactJS from "./svg/react";
import JSsvg from "./svg/JSsvg";
import NodeJS from "./svg/node";
import TypeScript from "./svg/typeScript";
import Graphql from "./svg/graphql";
import Apollo from "./svg/apollo";
import Python from "./svg/python";
import Github from "./svg/github";
import Linkedin from "./svg/linkedin";
// Constant
import { URLs } from "../../../utils/constant/constant";

const iconsCollection = {
  react: ReactJS,
  JS: JSsvg,
  node: NodeJS,
  typeScript: TypeScript,
  graphql: Graphql,
  apollo: Apollo,
  python: Python,
  github: Github,
  linkedin: Linkedin,
};

const properties = {
  icons: {
    react: "ReactJS",
    JS: "JSsvg",
    node: "NodeJS",
    typeScript: "TypeScript",
    graphql: "Graphql",
    apollo: "Apollo",
    python: "Python",
    github: "Github",
    linkedin: "Linkedin",
  },
  size: {
    huge: "huge",
    big: "big",
    medium: "medium",
    tiny: "tiny",
    small: "small",
  },
};

function Icon({ color, src, urlProp, rotation, size, width }) {
  const IconSVG = iconsCollection[src];
  let iconColor = color;
  const url = urlProp ? urlProp : URLs[src];
  return (
    <IconContainer title={properties.icons[src]} rotation={rotation} size={size} width={width}>
      {iconsCollection[src] && (
        <a href={url} target="_blank">
          <IconSVG color={iconColor} />
        </a>
      )}
    </IconContainer>
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  src: PropTypes.oneOf(Object.keys(properties.icons)).isRequired,
  urlProp: PropTypes.string,
  rotation: PropTypes.number,
  size: PropTypes.oneOf(Object.values(properties.size)),
  width: PropTypes.number,
};

Icon.defaultProps = {
  color: undefined,
  urlProp: "",
  rotation: 0,
  size: properties.size.medium,
  width: 24,
};

Icon.props = properties;
export default Icon;
