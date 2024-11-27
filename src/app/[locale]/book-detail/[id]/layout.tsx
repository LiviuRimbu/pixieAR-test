// app/en/layout.tsx
import React from "react";

const BookLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="bg-ardino-bg bg-210 bg-no-repeat bg-left-60 min-h-screen">
			{children}
		</div>
	);
};

export default BookLayout;
