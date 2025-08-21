"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { CareersCard, CareersCardContent, CareersCardHeader, CareersCardTitle, CareersCardDescription } from '../ui/CareersCard';
import { CareersSelect, CareersSelectContent, CareersSelectItem, CareersSelectTrigger, CareersSelectValue } from '../ui/CareersSelect';
import { CareersInput } from '../ui/CareersInput';
import { CareersButton } from '../ui/CareersButton';
import { FileText, Code, PenTool, PresentationIcon as PresentationChart, Database } from 'lucide-react';

const roles = [
  { title: 'Software Developer', icon: Code, color: 'blue' },
  { title: 'App Developer', icon: PenTool, color: 'teal' },
  { title: 'UI/UX Designer', icon: PresentationChart, color: 'purple' },
  { title: 'Project Manager', icon: FileText, color: 'yellow' },
  { title: 'Data Scientist', icon: Database, color: 'red' },
];

const Career: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [resume, setResume] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [fileName, setFileName] = useState<string>(''); // Track the file name

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!selectedRole || !resume) {
      setMessage('Please select a role and upload a resume.');
      return;
    }

    const formData = new FormData();
    formData.append('role', selectedRole);
    formData.append('resume', resume);

    try {
      const response = await fetch('https://company-backend-9e49.onrender.com/career', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
    
      if (response.ok) {
        setMessage('Resume submitted successfully!');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Error submitting form. Please try again.');
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
      setFileName(e.target.files[0].name); // Update the file name when a file is selected
    }
  };

  return (
    <section className="py-16 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">CAREERS</h2>
          <p className="text-xl text-neutral-50">Join Our Team</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <CareersCard 
                key={role.title}
                className={`transition-all duration-300 border-2 hover:shadow-lg hover:bg-${role.color}-900/20 hover:border-${role.color}-500 ${selectedRole === role.title ? `bg-${role.color}-900/20 border-${role.color}-500` : 'border-zinc-800'} bg-zinc-900`}
                onClick={() => setSelectedRole(role.title)}
              >
                <CareersCardContent className="p-6 text-center flex flex-col items-center">
                  <div className={`w-16 h-16 mb-4 bg-${role.color}-900/30 rounded-full flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 text-${role.color}-500`} />
                  </div>
                  <CareersCardTitle className="text-xl font-semibold mb-3 text-neutral-50">
                    {role.title}
                  </CareersCardTitle>
                </CareersCardContent>
              </CareersCard>
            );
          })}
        </div>

        <CareersCard className="w-full max-w-2xl mx-auto bg-zinc-900 border-zinc-800">
          <CareersCardHeader>
            <CareersCardTitle className="text-2xl font-bold text-neutral-50">Apply for a Career</CareersCardTitle>
            <CareersCardDescription className="text-neutral-400">Submit your application for the selected role</CareersCardDescription>
          </CareersCardHeader>
          <CareersCardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-neutral-300 mb-2">Selected Role</label>
                <CareersSelect value={selectedRole} onValueChange={setSelectedRole}>
                  <CareersSelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-neutral-200">
                    <CareersSelectValue placeholder="Select a role" />
                  </CareersSelectTrigger>
                  <CareersSelectContent className="bg-zinc-800 border-zinc-700">
                    {roles.map((role) => (
                      <CareersSelectItem key={role.title} value={role.title} className="text-neutral-200">
                        {role.title}
                      </CareersSelectItem>
                    ))}
                  </CareersSelectContent>
                </CareersSelect>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-neutral-300 mb-2">Upload Resume</label>
                <CareersInput
                  type="file"
                  id="resume"
                  onChange={handleFileChange}
                  className="w-full bg-zinc-800 border-zinc-700 text-neutral-200"
                  required
                />
                {/* Display the selected file name */}
                {fileName && (
                  <p className="text-sm text-neutral-400 mt-2">{fileName}</p>
                )}
              </div>

              <div>
                <CareersButton type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Application
                </CareersButton>
              </div>

              {message && <p className="text-center text-yellow-500">{message}</p>}
            </form>
          </CareersCardContent>
        </CareersCard>
      </div>
    </section>
  );
};

export default Career;
