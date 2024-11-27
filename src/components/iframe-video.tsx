import React from 'react';

interface IframeVideoProps {
	id: string;
}

const IframeVideo: React.FC<IframeVideoProps> = ({ id }) => {
	return (
		<div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-60 z-[100]">
			<iframe
				src={`https://player.vimeo.com/video/${id}&badge=0&autopause=0&player_id=1&app_id=58479&byline=0&title=0&portrait=0&dnt=1&autoplay=1&quality=360p`}
				frameBorder="0"
				allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
				className="w-[90vw] h-[90vh] rounded-lg shadow-lg" >

			</iframe>

		</div>
	);
};

export default IframeVideo;
