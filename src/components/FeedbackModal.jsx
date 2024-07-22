import React, { useEffect, useState } from 'react';

const FeedbackModal = ({ showModal, setShowModal }) => {
    const [rangeValue, setRangeValue] = useState(0);
    const [starRating, setStarRating] = useState(0);

    useEffect(() => {
        if (showModal) {
            setRangeValue(0); // Reset range value to 0 when modal is shown
            setStarRating(0); // Reset star rating to 0 when modal is shown
        }
    }, [showModal]);

    const handleStarClick = (index) => {
        setStarRating(index + 1); // Stars are 0-indexed, so add 1 to the clicked index
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <button
                    className="absolute top-0 right-0 m-4 text-xl w-2 h-2 rounded-full text-gray-400"
                    onClick={() => setShowModal(false)}
                >
                    &times;
                </button>
                <h2 className="text-[14px] font-normal mb-4">How would you rate our brand?</h2>
                <div className="flex justify-start mb-4 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            className={`text-3xl cursor-pointer ${i < starRating ? 'text-yellow-500' : 'text-gray-300'}`}
                            onClick={() => handleStarClick(i)}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
                <div className="mb-4">
                    <p>Star Rating: {starRating}</p> {/* Display the star rating value */}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">
                        On a scale of 1 - 10, How likely are you to recommend Coronation to a friend or colleague?
                    </label>
                    <div className="relative">
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={rangeValue}
                            onChange={(e) => setRangeValue(e.target.value)}
                            className="w-full outline-none border-none"
                        />
                        <div className="flex justify-between text-gray-400">
                            <span>0</span>
                            <span>10</span>
                        </div>
                        <div
                            className="absolute text-xs text-gray-500"
                            style={{
                                left: `calc(${(rangeValue / 10) * 100}% - ${rangeValue > 9 ? '16px' : '8px'})`,
                                top: '-20px',
                            }}
                        >
                            {rangeValue}
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">More feedback for us? (optional)</label>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="leave us a feedback"
                    ></textarea>
                </div>
                <button type='submit' className="bg-secondary text-white px-4 py-2 rounded">SUBMIT</button>
            </div>
        </div>
    );
};

export default FeedbackModal;
