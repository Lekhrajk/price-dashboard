import React from 'react'

const PricingCard = ({ item, isSelected, onSelect }) => {
  return (
    <div 
      className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
        isSelected 
          ? 'border-blue-500 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 shadow-xl shadow-blue-200/50' 
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50'
      }`}
      onClick={() => onSelect(item)}
    >
      {isSelected && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Popular
          </div>
        </div>
      )}
      
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">{item?.title || "Plan"}</h2>
          {isSelected && (
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {item?.price || "$0"}
          </div>
          {item?.period && (
            <div className="text-gray-500 text-sm font-medium">per {item.period}</div>
          )}
        </div>

        {item?.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>
        )}

        <div className="pt-4">
          <div className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
            isSelected 
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200/50' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}>
            {isSelected ? 'Current Plan' : 'Select Plan'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard