import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  MapPin, 
  Plus, 
  CheckCircle, 
  AlertTriangle, 
  Camera,
  X,
  Send
} from 'lucide-react';
import { useReports } from '../context/ReportsContext';

const issueTypes = [
  { value: 'pothole', label: 'Pothole', icon: '🕳️' },
  { value: 'garbage', label: 'Garbage Collection', icon: '🗑️' },
  { value: 'streetlight', label: 'Street Light', icon: '💡' },
  { value: 'water', label: 'Water Issue', icon: '💧' },
  { value: 'road', label: 'Road Damage', icon: '🛣️' },
  { value: 'traffic', label: 'Traffic Signal', icon: '🚦' },
  { value: 'noise', label: 'Noise Complaint', icon: '🔊' },
  { value: 'other', label: 'Other', icon: '📋' }
];

export const ReportIssue: React.FC = () => {
  const { addReport } = useReports();
  const [formData, setFormData] = useState({
    citizenName: '',
    issueType: '',
    description: '',
    location: '',
    imageUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      // In a real app, you'd upload to a service like Cloudinary
      const mockUrl = URL.createObjectURL(file);
      setFormData({ ...formData, imageUrl: mockUrl });
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setFormData({ ...formData, imageUrl: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    addReport(formData);
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      citizenName: '',
      issueType: '',
      description: '',
      location: '',
      imageUrl: ''
    });
    setSelectedImage(null);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const isFormValid = formData.citizenName && formData.issueType && formData.description && formData.location;

  return (
    <div className="min-h-screen py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-4">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">Report an Issue</h1>
          <p className="text-lg sm:text-xl text-slate-600 px-4">
            Help make your community better by reporting issues that need attention.
          </p>
        </motion.div>

        {/* Success Animation */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center max-w-md mx-4 shadow-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Report Submitted!</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4">
                Thank you for helping improve our community. We'll review your report shortly.
              </p>
              <div className="text-sm text-slate-500">
                Report ID: #{Date.now().toString().slice(-6)}
              </div>
            </div>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 space-y-4 sm:space-y-6"
        >
          {/* Citizen Name */}
          <div>
            <label htmlFor="citizenName" className="block text-sm font-semibold text-slate-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="citizenName"
              name="citizenName"
              value={formData.citizenName}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Issue Type */}
          <div>
            <label htmlFor="issueType" className="block text-sm font-semibold text-slate-700 mb-2">
              Issue Type *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
              {issueTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, issueType: type.value })}
                  className={`p-2 sm:p-3 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                    formData.issueType === type.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-lg sm:text-2xl mb-1">{type.icon}</div>
                  <div className="text-xs sm:text-xs font-medium leading-tight">{type.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-slate-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
              placeholder="Please describe the issue in detail..."
              required
            />
            <div className="text-sm text-slate-500 mt-1">
              {formData.description.length}/500 characters
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-slate-700 mb-2">
              Location *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                placeholder="Street address, landmark, or area"
                required
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload Image (Optional)
            </label>
            
            {!selectedImage ? (
              <label className="flex flex-col items-center justify-center w-full h-24 sm:h-32 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-slate-400 transition-colors bg-slate-50 hover:bg-slate-100">
                <Camera className="w-8 h-8 text-slate-400 mb-2" />
                <span className="text-sm text-slate-600">Click to upload an image</span>
                <span className="text-xs text-slate-500 hidden sm:block">PNG, JPG up to 10MB</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative">
                <img
                  src={formData.imageUrl}
                  alt="Issue"
                  className="w-full h-32 sm:h-48 object-cover rounded-xl border border-slate-200"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* AI Analysis Preview */}
          {formData.issueType && formData.description && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-xl p-4"
            >
              <div className="flex items-center mb-1 sm:mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-semibold text-blue-900">AI Analysis</span>
              </div>
              <p className="text-sm text-blue-800">
                Priority: <span className="font-semibold">Medium</span> • 
                Category: <span className="font-semibold">{issueTypes.find(t => t.value === formData.issueType)?.label}</span> • 
                Est. Resolution: <span className="font-semibold">3-5 days</span>
              </p>
            </motion.div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Submitting Report...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Report
              </>
            )}
          </button>

          {!isFormValid && (
            <div className="flex items-start text-amber-600 text-sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span>Please fill in all required fields</span>
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
};