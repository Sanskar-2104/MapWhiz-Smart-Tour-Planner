'use client';

import { Search, Calendar, MapPin, Star, Bell, ChevronLeft, ChevronRight, Plane, Heart, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDate, setSelectedDate] = useState(18);

  const daysInMonth = [
    { day: '', active: false },
    { day: '', active: false },
    { day: '', active: false },
    { day: '1', active: false },
    { day: '2', active: false },
    { day: '3', active: false },
    { day: '4', active: false },
    { day: '5', active: false },
    { day: '6', active: false },
    { day: '7', active: false },
    { day: '8', active: false },
    { day: '9', active: false },
    { day: '10', active: false },
    { day: '11', active: false },
    { day: '12', active: false },
    { day: '13', active: false },
    { day: '14', active: false },
    { day: '15', active: false },
    { day: '16', active: false },
    { day: '17', active: false },
    { day: '18', active: true },
    { day: '19', active: true },
    { day: '20', active: false },
    { day: '21', active: false },
    { day: '22', active: false },
    { day: '23', active: false },
    { day: '24', active: false },
    { day: '25', active: false },
    { day: '26', active: false },
    { day: '27', active: false },
    { day: '28', active: false },
    { day: '29', active: false },
    { day: '30', active: false },
    { day: '31', active: false },
  ];

  const tripPlans = [
    {
      id: 1,
      title: "Nha Trang (Vietnam)",
      country: "Vietnam",
      rating: 4.9,
      reviews: 1892,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop",
      description: "Nha Trang has this intoxicating beauty that's a famous tourist center.",
      liked: false
    },
    {
      id: 2,
      title: "Paris (France)",
      country: "France",
      rating: 4.8,
      reviews: 1422,
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=200&fit=crop",
      description: "Paris, the city of lights with iconic landmarks and romantic atmosphere.",
      liked: true
    },
    {
      id: 3,
      title: "Bangkok (Thailand)",
      country: "Thailand",
      rating: 4.6,
      reviews: 967,
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=200&fit=crop",
      description: "Bangkok's vibrant street life and magnificent temples await you.",
      liked: false
    }
  ];

  const doneTrips = [
    {
      id: 1,
      title: "Da Lat (Vietnam)",
      dates: "06 Jan - 10 Jan (2022)",
      gradient: "from-emerald-400 to-cyan-500",
      icon: MapPin,
      action: "Rating"
    },
    {
      id: 2,
      title: "Berlin (Germany) ★ 5",
      dates: "04 Jan - 10 Jan (2022)",
      gradient: "from-amber-400 to-orange-500",
      icon: Star,
      action: "Rebook"
    },
    {
      id: 3,
      title: "New York (USA) ★ 4",
      dates: "02 Jan - 05 Jan (2022)",
      gradient: "from-violet-400 to-purple-500",
      icon: Star,
      action: "Rebook"
    },
    {
      id: 4,
      title: "Da Lat (Vietnam)",
      dates: "31 Dec - 02 Jan (2022)",
      gradient: "from-blue-400 to-indigo-500",
      icon: MapPin,
      action: "Rebook"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="glass-effect sticky top-0 z-50 flex items-center justify-between p-6 border-b border-border/30">
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hello Explorer!
            </h1>
            <p className="text-muted-foreground">Welcome back and explore new adventures</p>
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary travel-transition" />
            <input
              type="text"
              placeholder="Search destinations, experiences..."
              className="glass-effect border border-border/50 rounded-full pl-12 pr-4 py-3 w-96 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary travel-transition placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
          </Button>
          <div className="w-12 h-12 rounded-full travel-gradient-warm p-[2px] hover-lift cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
              alt="User"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Upcoming trips */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">Upcoming Adventures</h2>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  <Plane className="h-4 w-4" />
                  <span>2 trips planned</span>
                </div>
              </div>
              
              <Card className="glass-effect border-border/30 overflow-hidden hover-lift group">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-64 h-48 md:h-40 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1554797589-7241bb691973?w=400&h=300&fit=crop"
                      alt="Cherry blossom Seoul"
                      className="w-full h-full object-cover group-hover:scale-105 travel-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary travel-transition">
                          Cherry Blossom Seoul Adventure
                        </h3>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>23 Mar - 28 Mar</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>Myeongdong, Seoul</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>2 travelers</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          Experience Korea's magical spring season with breathtaking cherry blossoms, 
                          traditional temples, and vibrant street markets in the heart of Seoul.
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-medium">4.9</span>
                            <span className="text-sm text-muted-foreground">(2,341 reviews)</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm">
                            <Clock className="h-3 w-3" />
                            <span>5 days left</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="travel" className="px-8">
                            View Details
                          </Button>
                          <Button variant="travel-outline">
                            Share Trip
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Trips plans exclusively for you */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Curated For You</h2>
                <div className="flex items-center gap-2">
                  <Button 
                    variant={activeTab === 'all' ? 'travel' : 'travel-glass'} 
                    size="sm"
                    onClick={() => setActiveTab('all')}
                  >
                    All
                  </Button>
                  <Button 
                    variant={activeTab === 'popular' ? 'travel' : 'travel-glass'} 
                    size="sm"
                    onClick={() => setActiveTab('popular')}
                  >
                    Popular
                  </Button>
                  <Button 
                    variant={activeTab === 'trending' ? 'travel' : 'travel-glass'} 
                    size="sm"
                    onClick={() => setActiveTab('trending')}
                  >
                    Trending
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tripPlans.map((trip) => (
                  <Card key={trip.id} className="glass-effect border-border/30 overflow-hidden hover-lift group cursor-pointer">
                    <div className="relative">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={trip.image}
                          alt={trip.title}
                          className="w-full h-full object-cover group-hover:scale-110 travel-transition"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-white hover:bg-white/20"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle like toggle
                          }}
                        >
                          <Heart className={`h-4 w-4 ${trip.liked ? 'fill-red-500 text-red-500' : ''}`} />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <div className="flex items-center gap-1 text-xs mb-1">
                          <MapPin className="h-3 w-3" />
                          <span>{trip.country}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary travel-transition">
                        {trip.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {trip.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">{trip.rating}</span>
                          <span className="text-xs text-muted-foreground">({trip.reviews.toLocaleString()})</span>
                        </div>
                        <Button variant="travel" size="sm">
                          Explore
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Most view trips */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Trending Destinations</h2>
              <Card className="glass-effect border-border/30 overflow-hidden hover-lift group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=300&fit=crop"
                    alt="Bali WildLife Sanctuary"
                    className="w-full h-full object-cover group-hover:scale-105 travel-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary travel-transition">
                        Bali Wildlife Sanctuary Adventure
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>Best Time to Visit</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>25 Mar - 30 Apr</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Immerse yourself in Bali's incredible biodiversity with guided wildlife tours, 
                        traditional village visits, and unforgettable nature experiences.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Ubud, Bali</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">4.9</span>
                          <span className="text-sm text-muted-foreground">(1,422)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="travel" className="px-8">
                      Book Experience
                    </Button>
                    <Button variant="travel-outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card className="glass-effect border-border/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Travel Calendar</h3>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">MAR 2022</span>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-xs font-medium text-muted-foreground mb-3">TRAVEL ACTIVITY</div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-xs text-center mb-3">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                  <div key={day} className="text-muted-foreground font-medium py-2">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {daysInMonth.map((day, index) => (
                  <button
                    key={index} 
                    className={`h-10 flex items-center justify-center text-sm rounded-lg travel-transition ${
                      day.active 
                        ? 'travel-gradient-primary text-white shadow-lg scale-105' 
                        : day.day 
                          ? 'text-foreground hover:bg-accent hover:scale-105 cursor-pointer' 
                          : 'cursor-default'
                    }`}
                    onClick={() => day.day && setSelectedDate(parseInt(day.day))}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </Card>

            {/* Done trips */}
            <Card className="glass-effect border-border/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Recent Adventures</h3>
                <Button variant="travel-glass" size="sm">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {doneTrips.map((trip) => {
                  const IconComponent = trip.icon;
                  return (
                    <div key={trip.id} className="group">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 travel-transition hover-lift">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${trip.gradient} flex items-center justify-center shadow-lg`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold">{trip.title}</div>
                            <div className="text-xs text-muted-foreground">{trip.dates}</div>
                          </div>
                        </div>
                        <Button variant="travel" size="sm" className="opacity-0 group-hover:opacity-100 travel-transition">
                          {trip.action}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;