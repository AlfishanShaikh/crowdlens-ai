import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  MapPin,
  Download,
  Filter,
  ChevronDown,
  Lock,
  User,
  LogIn
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useReports } from '../context/ReportsContext';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export const AdminDashboard: React.FC = () => {
  const { user, login, isAdmin } = useAuth();
  const { reports, updateReportStatus } = useReports();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showLogin, setShowLogin] = useState(!user);

  // Analytics data
  const analytics = useMemo(() => {
    const statusData = [
      { name: 'Pending', value: reports.filter(r => r.status === 'Pending').length, color: '#F59E0B' },
      { name: 'In Progress', value: reports.filter(r => r.status === 'In Progress').length, color: '#3B82F6' },
      { name: 'Resolved', value: reports.filter(r => r.status === 'Resolved').length, color: '#10B981' }
    ];

    const issueTypeData = reports.reduce((acc, report) => {
      acc[report.issueType] = (acc[report.issueType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const issueTypes = Object.entries(issueTypeData).map(([name, value]) => ({ name, value }));

    const locationData = reports.reduce((acc, report) => {
      const area = report.location.split(',')[0]; // Get first part of location
      acc[area] = (acc[area] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const locations = Object.entries(locationData).map(([name, value]) => ({ name, value }));

    // Time series data (mock)
    const timeSeriesData = [
      { month: 'Jan', reports: 45 },
      { month: 'Feb', reports: 52 },
      { month: 'Mar', reports: 48 },
      { month: 'Apr', reports: 61 },
      { month: 'May', reports: 55 },
      { month: 'Jun', reports: 67 }
    ];

    return { statusData, issueTypes, locations, timeSeriesData };
  }, [reports]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(loginData.email, loginData.password);
    if (success) {
      setShowLogin(false);
    } else {
      alert('Invalid credentials. Use admin@crowdlens.ai / admin123');
    }
  };

  const handleStatusUpdate = (reportId: string, newStatus: 'Pending' | 'In Progress' | 'Resolved') => {
    updateReportStatus(reportId, newStatus);
  };

  const exportData = () => {
    const csvData = reports.map(report => ({
      ID: report.id,
      Citizen: report.citizenName,
      Type: report.issueType,
      Status: report.status,
      Location: report.location,
      Created: report.createdAt,
      Updated: report.updatedAt
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reports.csv';
    a.click();
  };

  if (showLogin || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full space-y-6 sm:space-y-8 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Admin Login</h2>
            <p className="text-sm sm:text-base text-slate-600">Access the administrative dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="admin@crowdlens.ai"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2 sm:py-3 px-4 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </button>
          </form>

          <div className="text-center text-sm text-slate-500">
            
            {/* Admin password and user id */}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
              <p className="text-lg sm:text-xl text-slate-600">Manage and analyze community reports</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button
                onClick={exportData}
                className="flex items-center px-3 sm:px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
              <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-50 rounded-lg w-full sm:w-auto justify-center sm:justify-start">
                <User className="w-4 h-4 text-blue-600" />
                <span className="text-sm sm:text-base text-blue-900 font-medium">{user?.name}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8"
        >
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-600">Total Reports</p>
                <p className="text-xl sm:text-3xl font-bold text-slate-900">{reports.length}</p>
              </div>
              <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 sm:mt-4 text-xs sm:text-sm">
              <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
              <span className="text-emerald-600">+12% from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-600">Pending</p>
                <p className="text-xl sm:text-3xl font-bold text-amber-600">
                  {reports.filter(r => r.status === 'Pending').length}
                </p>
              </div>
              <div className="w-8 sm:w-12 h-8 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 sm:mt-4 text-xs sm:text-sm">
              <span className="text-slate-500">Requires attention</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-600">In Progress</p>
                <p className="text-xl sm:text-3xl font-bold text-blue-600">
                  {reports.filter(r => r.status === 'In Progress').length}
                </p>
              </div>
              <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 sm:mt-4 text-xs sm:text-sm">
              <span className="text-slate-500">Being resolved</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-600">Resolved</p>
                <p className="text-xl sm:text-3xl font-bold text-emerald-600">
                  {reports.filter(r => r.status === 'Resolved').length}
                </p>
              </div>
              <div className="w-8 sm:w-12 h-8 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 sm:mt-4 text-xs sm:text-sm">
              <span className="text-emerald-600">85% resolution rate</span>
            </div>
          </div>
        </motion.div>

        {/* Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8"
        >
          {/* Status Distribution */}
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Status Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={analytics.statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {analytics.statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Issue Types */}
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Issues by Type</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={analytics.issueTypes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Reports Over Time */}
          <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200 lg:col-span-2">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Reports Over Time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={analytics.timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="reports" stroke="#10B981" strokeWidth={3} dot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recent Reports Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl border border-slate-200"
        >
          <div className="p-4 sm:p-6 border-b border-slate-200">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900">Recent Reports</h3>
            <p className="text-sm sm:text-base text-slate-600">Manage and update report statuses</p>
          </div>

          <div className="divide-y divide-slate-200">
            {reports.slice(0, 5).map((report) => (
              <div key={report.id} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors">
                <div className="flex flex-col sm:flex-row items-start justify-between space-y-3 sm:space-y-0">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1 sm:mb-2">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900">{report.citizenName}</h4>
                        <p className="text-sm text-slate-500">{report.issueType}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base text-slate-700 mb-2 sm:mb-3">{report.description}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-slate-500">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="truncate">{report.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(report.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto sm:ml-6">
                    <select
                      value={report.status}
                      onChange={(e) => handleStatusUpdate(report.id, e.target.value as any)}
                      className="w-full sm:w-auto px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};