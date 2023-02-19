import styled from 'styled-components';

export const StyledEmoji = styled.div`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	position: absolute;
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	right: ${({ right }) => right};

	.emoji {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: ${({ noDisplayWidth }) => noDisplayWidth}) {
    display: none;
  }
`