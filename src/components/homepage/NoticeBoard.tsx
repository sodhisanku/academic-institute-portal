import React, { useState, useEffect } from 'react';
import { Bell, Calendar, ExternalLink, Filter } from 'lucide-react';
import mockData from '../../data/mockData.json';

const NoticeBoard = () => {
  const [notices, setNotices] = useState(mockData.notices);
  const [filter, setFilter] = useState('all');

  const noticeTypes = [
    { value: 'all', label: 'All Notices' },
    { value: 'admission', label: 'Admissions' },
    { value: 'recruitment', label: 'Recruitment' },
    { value: 'event', label: 'Events' },
    { value: 'exam', label: 'Examinations' },
    { value: 'research', label: 'Research' }
  ];

  const filteredNotices = filter === 'all' 
    ? notices 
    : notices.filter(notice => notice.type === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getNoticeTypeColor = (type: string) => {
    const colors = {
      admission: 'bg-blue-100 text-blue-800',
      recruitment: 'bg-green-100 text-green-800',
      event: 'bg-purple-100 text-purple-800',
      exam: 'bg-red-100 text-red-800',
      research: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="section-padding bg-muted">
      <div className="container-academic">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Bell className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold">Latest Notices</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important information from NIT Silchar
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {noticeTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setFilter(type.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === type.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNotices.slice(0, 6).map((notice) => (
            <div key={notice.id} className="card-academic hover-lift">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getNoticeTypeColor(notice.type)}`}>
                    {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                  </span>
                  {notice.urgent && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      Urgent
                    </span>
                  )}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(notice.date)}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                {notice.title}
              </h3>
              
              <div className="flex items-center justify-between">
                <a
                  href={notice.link}
                  className="text-primary hover:text-primary-dark font-medium text-sm flex items-center transition-colors"
                >
                  Read More
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
                <span className="text-xs text-muted-foreground">
                  {Math.floor(Math.random() * 10) + 1} days ago
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Notices Button */}
        <div className="text-center mt-8">
          <a href="/notices" className="btn-academic">
            View All Notices
          </a>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;