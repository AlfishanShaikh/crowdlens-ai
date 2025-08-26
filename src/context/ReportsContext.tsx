import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Report {
  id: string;
  citizenName: string;
  issueType: string;
  description: string;
  location: string;
  imageUrl?: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  createdAt: string;
  updatedAt: string;
  urgency?: 'Low' | 'Medium' | 'High';
}

interface ReportsContextType {
  reports: Report[];
  addReport: (report: Omit<Report, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => void;
  updateReportStatus: (id: string, status: Report['status']) => void;
}

const ReportsContext = createContext<ReportsContextType | undefined>(undefined);

export const useReports = () => {
  const context = useContext(ReportsContext);
  if (context === undefined) {
    throw new Error('useReports must be used within a ReportsProvider');
  }
  return context;
};

interface ReportsProviderProps {
  children: ReactNode;
}

export const ReportsProvider: React.FC<ReportsProviderProps> = ({ children }) => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: '1',
      citizenName: 'John Smith',
      issueType: 'Pothole',
      description: 'Large pothole on Main Street causing vehicle damage',
      location: 'Main Street, Block 12',
      status: 'In Progress',
      createdAt: '2024-01-15',
      updatedAt: '2024-01-16',
      urgency: 'High'
    },
    {
      id: '2',
      citizenName: 'Sarah Johnson',
      issueType: 'Garbage Collection',
      description: 'Garbage not collected for 3 days in residential area',
      location: 'Oak Avenue, Sector 7',
      status: 'Pending',
      createdAt: '2024-01-16',
      updatedAt: '2024-01-16',
      urgency: 'Medium'
    },
    {
      id: '3',
      citizenName: 'Mike Davis',
      issueType: 'Street Light',
      description: 'Street light not working, safety concern at night',
      location: 'Park Road, Near School',
      status: 'Resolved',
      createdAt: '2024-01-14',
      updatedAt: '2024-01-17',
      urgency: 'High'
    }
  ]);

  const addReport = (reportData: Omit<Report, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => {
    const newReport: Report = {
      ...reportData,
      id: Date.now().toString(),
      status: 'Pending',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      urgency: 'Medium' // AI would determine this in real app
    };
    setReports(prev => [newReport, ...prev]);
  };

  const updateReportStatus = (id: string, status: Report['status']) => {
    setReports(prev => prev.map(report => 
      report.id === id 
        ? { ...report, status, updatedAt: new Date().toISOString().split('T')[0] }
        : report
    ));
  };

  return (
    <ReportsContext.Provider value={{ reports, addReport, updateReportStatus }}>
      {children}
    </ReportsContext.Provider>
  );
};