import React from "react";
import { StyledEmoji } from "./styles/StyledEmoji";

export default function Emoji ({ emojiFileName,
		height,
		width, 
		top, left, 
		right, 
		noDisplayWidth }) {

	return (
		<StyledEmoji 
		height={height} 
		width={width} 
		top={top} 
		left={left} 
		right={right} 
		noDisplayWidth={noDisplayWidth}>

			<img src={ "./images/emoji/" + emojiFileName } alt= { emojiFileName } className="emoji"/>	

		</StyledEmoji>
	)
}