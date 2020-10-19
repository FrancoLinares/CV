import React, { useContext } from "react";
import PropTypes from "prop-types";
// Framer-motion
import { motion, useViewportScroll, useTransform } from "framer-motion";
// Material UI
import Typography from "@material-ui/core/Typography";
// Styles
import styles from "../../../assets/styles/common.scss";
import pageStyles from "../../../assets/styles/page.scss";
// Context
import { dataContext } from "../../../store/context/dataContext";
// Components
import Icon from "../../UI/icon/Icon";

function InitPage() {
  const { data, isMobile } = useContext(dataContext);
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.2, 0]);

  return (
    <>
      <motion.div className={pageStyles.initPage} initial={{ opacity: 1 }} style={{ opacity: opacity }}>
        <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            {data.init_screen && data.init_screen.header}
          </Typography>
        </motion.div>
        <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 1.5 }}>
          <Typography variant="h2" gutterBottom>
            {data.init_screen && data.init_screen.position}
          </Typography>
        </motion.div>
        <motion.div initial={{ x: -2000 }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 2 }}>
          <Typography variant="h3" gutterBottom>
            Know me a little bit more.
          </Typography>
        </motion.div>
        <motion.div className={styles.technologies} initial={{ y: -2000 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100, duration: 1 }}>
          <div>
            <Icon src="react" color="#53C1DE" rotation={-5} size="big" width={24} />
            <Icon src="JS" color="#F7DF1E" rotation={5} size="big" width={24} />
            <Icon src="node" color="" rotation={5} size="big" width={24} />
          </div>
          <div>
            <Icon src="typeScript" color="#007acc" rotation={10} size="big" width={24} />
            <Icon src="graphql" color="#E10098" rotation={5} size="big" width={24} />
            <Icon src="apollo" color="#000" rotation={-5} size="big" width={24} />
            <Icon src="python" color="#000" rotation={-10} size="big" width={24} />
          </div>
        </motion.div>
        {data.social && (
          <motion.div className={styles.socialMedia}>
            <Icon src="github" urlProp={data.social.github} color="#000" rotation={0} size="big" width={24} />
            <Icon src="linkedin" urlProp={data.social.linkedin} color="#0077B7" rotation={0} size="big" width={24} />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

InitPage.propTypes = {
  data: PropTypes.shape({
    init_screen: PropTypes.object.isRequired,
    social: PropTypes.object.isRequired,
  }),
};
export default InitPage;
