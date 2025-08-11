import React from 'react'

const PricingLoader = ({ isLoading, numberOfCards = 3 }) => {
    if (!isLoading) return null;
    
    return (
        <div className="py-5 px-8">
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
                <div className="grid grid-cols-3 gap-6">
                        {[...Array(numberOfCards)].map((_, i) => (
                            <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PricingLoader