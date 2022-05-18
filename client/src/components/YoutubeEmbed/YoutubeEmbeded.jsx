import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbed.scss";

const YoutubeEmbed = ({ embedId, useFor }) => (
      <div className={useFor === 'Card' ? "" : "video-responsive"}>
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded youtube"
        />
      </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  useFor: PropTypes.string.isRequired
};

export default YoutubeEmbed;