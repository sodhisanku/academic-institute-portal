import React, { useState } from 'react';
import { Download, Calendar, Search, Filter, FileText, Clock, CheckCircle, XCircle } from 'lucide-react';
import mockData from '../data/mockData.json';

const Tenders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredTenders = mockData.tenders.filter(tender => {
    const matchesSearch = tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tender.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || tender.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <CheckCircle className="h-4 w-4" />;
      case 'closed':
        return <XCircle className="h-4 w-4" />;
      case 'upcoming':
        return <Clock className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getDaysRemaining = (lastDate: string) => {
    const today = new Date();
    const deadline = new Date(lastDate);
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-academic text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Tenders</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Explore current and upcoming tender opportunities at NIT Silchar. 
            Access detailed documentation and submission guidelines.
          </p>
        </div>
      </section>

      {/* Tender Information */}
      <section className="section-padding bg-white">
        <div className="container-academic">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="card-academic text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Transparent Process</h3>
              <p className="text-muted-foreground text-sm">
                Fair and transparent tendering process following government guidelines
              </p>
            </div>
            <div className="card-academic text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Timely Updates</h3>
              <p className="text-muted-foreground text-sm">
                Regular updates on tender status and important deadlines
              </p>
            </div>
            <div className="card-academic text-center">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Easy Access</h3>
              <p className="text-muted-foreground text-sm">
                Download tender documents and submit proposals online
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="card-academic mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search tenders by title or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none min-w-40"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tenders Table */}
          <div className="card-academic overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Tender Details</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Publish Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Last Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredTenders.map((tender) => {
                    const daysRemaining = getDaysRemaining(tender.lastDate);
                    return (
                      <tr key={tender.id} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{tender.title}</h3>
                            <p className="text-sm text-muted-foreground">ID: {tender.id}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            {formatDate(tender.publishDate)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="flex items-center text-muted-foreground mb-1">
                              <Calendar className="h-4 w-4 mr-2" />
                              {formatDate(tender.lastDate)}
                            </div>
                            {tender.status === 'Active' && daysRemaining > 0 && (
                              <div className="text-xs text-orange-600">
                                {daysRemaining} days remaining
                              </div>
                            )}
                            {tender.status === 'Active' && daysRemaining <= 0 && (
                              <div className="text-xs text-red-600">
                                Deadline passed
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tender.status)}`}>
                            {getStatusIcon(tender.status)}
                            <span className="ml-1">{tender.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={tender.document}
                            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm font-medium"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {filteredTenders.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No tenders found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="section-padding bg-muted">
        <div className="container-academic">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tender Guidelines</h2>
            <p className="text-lg text-muted-foreground">
              Important information for tender participants
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-academic">
              <h3 className="text-xl font-semibold text-foreground mb-4">Submission Process</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Download Documents</h4>
                    <p className="text-sm text-muted-foreground">Download and review tender documents carefully</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Prepare Proposal</h4>
                    <p className="text-sm text-muted-foreground">Prepare your technical and financial proposals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Submit On Time</h4>
                    <p className="text-sm text-muted-foreground">Submit before the deadline with all required documents</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-academic">
              <h3 className="text-xl font-semibold text-foreground mb-4">Important Notes</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>All submissions must be received before the specified deadline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Late submissions will not be accepted under any circumstances</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Technical and financial bids must be submitted separately</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>All documents must be properly signed and sealed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Contact procurement office for any clarifications</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">For queries related to tenders, contact:</p>
            <div className="inline-flex items-center space-x-4 text-sm">
              <span className="font-medium text-foreground">Procurement Office: procurement@nits.ac.in</span>
              <span className="text-muted-foreground">|</span>
              <span className="font-medium text-foreground">Phone: +91-3842-242973</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tenders;