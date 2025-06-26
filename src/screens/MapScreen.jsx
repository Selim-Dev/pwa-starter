import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, MapPin, Bell, List, ChevronDown, Star, Navigation, Search, X } from 'lucide-react'

// Import your assets.
import mapImage from '../assets/maps/map.png'
import station1Image from '../assets/maps/station1.jpg'
import station2Image from '../assets/maps/station2.jpg'

// Dummy search data
const searchLocations = [
    { id: 1, name: 'Pak De Station', address: 'Jl. HR Soebrantas, Tampan, Pekanbaru', type: 'station', rating: 5.0 },
    { id: 2, name: 'R CarWash Station', address: 'Jl. Arifin Ahmad, Tampan, Pekanbaru', type: 'station', rating: 5.0 },
    { id: 3, name: 'Mall Pekanbaru', address: 'Jl. Soekarno Hatta, Pekanbaru', type: 'location', rating: null },
    { id: 4, name: 'Universitas Riau', address: 'Jl. HR Soebrantas, Simpang Baru, Pekanbaru', type: 'location', rating: null },
    { id: 5, name: 'Bandara Sultan Syarif Kasim II', address: 'Jl. Airport, Pekanbaru', type: 'location', rating: null },
    { id: 6, name: 'Haji Rahmat Car Wash', address: 'Jl. Tuanku Tambusai, Pekanbaru', type: 'station', rating: 4.8 },
    { id: 7, name: 'Hotel Aryaduta', address: 'Jl. Riau, Pekanbaru', type: 'location', rating: null },
    { id: 8, name: 'Plaza Senapelan', address: 'Jl. Jenderal Sudirman, Pekanbaru', type: 'location', rating: null }
]

// --- Helper Components ---

// Search Result Item
const SearchResultItem = ({ location, onSelect }) => (
    <button
        className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
        onClick={() => onSelect(location)}
    >
        <div className="flex items-center justify-between">
            <div className="flex-1">
                <div className="flex items-center">
                    <MapPin size={16} className="text-gray-400 mr-2 flex-shrink-0" />
                    <div>
                        <h4 className="font-medium text-gray-900 text-sm">{location.name}</h4>
                        <p className="text-xs text-gray-500 mt-1">{location.address}</p>
                    </div>
                </div>
            </div>
            {location.type === 'station' && location.rating && (
                <div className="flex items-center ml-2">
                    <Star size={12} className="text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-xs font-medium text-gray-600">{location.rating}</span>
                </div>
            )}
        </div>
    </button>
)

// Updated StationCard to link to the booking page
const StationCard = ({ station }) => (
    <Link to="/booking" className="block flex-shrink-0">
        <div className="relative w-48 h-36 rounded-xl overflow-hidden shadow-lg">
            <img src={station.image} alt={station.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute top-0 right-0 bg-black/50 text-white flex items-center px-2 py-1 rounded-bl-lg">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="font-bold text-sm">{station.rating.toFixed(1)}</span>
            </div>
            <div className="absolute bottom-0 left-0 p-3 text-white">
                <h3 className="font-bold text-sm">{station.name}</h3>
                <div className="flex items-center text-xs opacity-90 mt-1">
                    <MapPin size={12} className="mr-1" />
                    <span>{station.distance}</span>
                </div>
            </div>
        </div>
    </Link>
)

// --- Main Screen Component ---
const MapScreen = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const [showSearchResults, setShowSearchResults] = useState(false)
    const [filteredLocations, setFilteredLocations] = useState([])

    // Hardcoded data for the POC
    const stations = [
        { id: 1, name: 'Pak De Station', distance: '1.3 km', rating: 5.0, image: station1Image },
        { id: 2, name: 'R CarWash Station', distance: '1.5 km', rating: 5.0, image: station2Image },
    ]

    const mapPins = [
        { top: '22%', left: '25%' },
        { top: '40%', left: '55%' },
        { top: '65%', left: '78%' },
    ]

    // Handle search input
    const handleSearchChange = (value) => {
        setSearchQuery(value)
        if (value.trim().length > 0) {
            const filtered = searchLocations.filter(location =>
                location.name.toLowerCase().includes(value.toLowerCase()) ||
                location.address.toLowerCase().includes(value.toLowerCase())
            )
            setFilteredLocations(filtered)
            setShowSearchResults(true)
        } else {
            setShowSearchResults(false)
            setFilteredLocations([])
        }
    }

    // Handle search result selection
    const handleSelectLocation = (location) => {
        setSearchQuery(location.name)
        setShowSearchResults(false)

        // Navigate to appropriate page based on location type
        if (location.type === 'station') {
            // Use navigate instead of window.location.href to prevent page reload
            navigate('/booking')
        } else {
            // For regular locations, you could navigate to a location details page
            // For now, we'll just close the search
            console.log('Selected location:', location)
        }
    }

    // Clear search
    const clearSearch = () => {
        setSearchQuery('')
        setShowSearchResults(false)
        setFilteredLocations([])
    }

    return (
        <div className="w-full h-screen bg-gray-200 font-sans overflow-hidden relative">
            <img src={mapImage} className="absolute inset-0 w-full h-full object-cover z-0" alt="City map" />

            {/* Current location indicator */}
            <div className="absolute z-10" style={{ top: '51%', left: '42%' }}>
                <Navigation className="w-8 h-8 text-black -rotate-[30deg] drop-shadow-lg" />
            </div>

            {/* Map pins */}
            {mapPins.map((pin, index) => (
                <div key={index} className="absolute z-10" style={{ top: pin.top, left: pin.left }}>
                    <MapPin className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-md" />
                </div>
            ))}

            {/* Search Bar */}
            <div className="absolute top-12 left-4 right-4 z-20">
                <div className="relative">
                    <div className="flex items-center bg-yellow-400 shadow-lg rounded-lg p-3">
                        <Search className="text-gray-800 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search Your Location..."
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="flex-grow bg-transparent text-gray-800 placeholder-gray-600 font-semibold mx-2 focus:outline-none"
                        />
                        {searchQuery ? (
                            <button onClick={clearSearch}>
                                <X className="text-gray-800 h-5 w-5" />
                            </button>
                        ) : (
                            <ChevronDown className="text-gray-800 h-6 w-6" />
                        )}
                    </div>

                    {/* Search Results Dropdown */}
                    {showSearchResults && filteredLocations.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-64 overflow-y-auto z-30">
                            <div className="py-2">
                                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-50">
                                    Search Results ({filteredLocations.length})
                                </div>
                                {filteredLocations.map((location) => (
                                    <SearchResultItem
                                        key={location.id}
                                        location={location}
                                        onSelect={handleSelectLocation}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* No results message */}
                    {showSearchResults && searchQuery && filteredLocations.length === 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-30">
                            <div className="px-4 py-6 text-center text-gray-500">
                                <Search size={24} className="mx-auto mb-2 text-gray-300" />
                                <p className="text-sm">No locations found for "{searchQuery}"</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Station Cards */}
            <div className="absolute bottom-[100px] left-0 right-0 z-20">
                <div className="overflow-x-auto flex space-x-4 px-4 pb-4" style={{ clipPath: 'inset(0 0 -10px 0)' }}>
                    {stations.map(station => (
                        <StationCard key={station.id} station={station} />
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            {/* <div className="absolute bottom-0 left-0 right-0 z-20 bg-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] rounded-t-2xl">
                <div className="flex justify-around items-center h-20">
                    <Link to="/home" className="text-gray-400 p-2">
                        <Home size={28} />
                    </Link>
                    <Link to="/map" className="text-yellow-400 p-2">
                        <MapPin size={28} strokeWidth={2.5} />
                    </Link>
                    <Link to="/notifications" className="text-gray-400 p-2">
                        <Bell size={28} />
                    </Link>
                    <Link to="/menu" className="text-gray-400 p-2">
                        <List size={28} />
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default MapScreen