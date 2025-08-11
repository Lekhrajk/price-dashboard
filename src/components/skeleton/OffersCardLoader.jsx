import React from 'react'

const OffersCardLoader = ({ isLoading }) => {
    if (!isLoading) return null;
    
    return (
        <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl p-8 shadow-lg animate-pulse">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
                    <div>
                        <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                </div>
                
                {/* Countdown Timer Placeholder */}
                <div className="flex items-center space-x-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                </div>
            </div>
            
            {/* Offer Items */}
            <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                                <div className="space-y-2">
                                    <div className="h-5 bg-gray-200 rounded w-64"></div>
                                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="h-6 bg-gray-200 rounded-full w-12"></div>
                                <div className="w-5 h-5 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OffersCardLoader 