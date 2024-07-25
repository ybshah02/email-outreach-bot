"use client";

import Navbar from './components/global/Navbar';
import FilterPanel from './components/home/FilterPanel';
import EmailCard from './components/home/EmailCard';
import { useState } from 'react';

interface Email {
  recipientName: string;
  recipientEmail: string;
  subject: string;
  body: string;
  date: string;
  initials: string;
}

const emails: Email[] = [
  {
    recipientName: 'John Doe',
    recipientEmail: 'john.doe@example.com',
    subject: 'Meeting Reminder',
    body: 'This is a reminder for our meeting scheduled tomorrow.',
    date: 'Jan 21',
    initials: 'JD',
  },
  {
    recipientName: 'Jane Smith',
    recipientEmail: 'jane.smith@example.com',
    subject: 'Project Update',
    body: 'Here is the latest update on the project.',
    date: 'Jan 20',
    initials: 'JS',
  },
  // Add more email examples as needed
];

const Home = () => {
  const [filter, setFilter] = useState<string>('');
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const handleEmailClick = (email: Email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-1">
        <main className="flex-1 flex overflow-hidden border-t border-l">
          <div className="w-full md:w-1/3 border-r">
            <h2 className="text-lg font-semibold p-4 border-b">Conversations</h2>
            {emails.map((email, index) => (
              <EmailCard
                key={index}
                recipientName={email.recipientName}
                recipientEmail={email.recipientEmail}
                subject={email.subject}
                date={email.date}
                initials={email.initials}
                isSelected={selectedEmail === email}
                onClick={() => handleEmailClick(email)}
              />
            ))}
          </div>
          {selectedEmail && (
            <div className="flex-1 p-4 overflow-y-auto bg-white">
              <h2 className="text-lg font-bold">{selectedEmail.subject}</h2>
              <p className="text-sm text-gray-500">{selectedEmail.recipientName} ({selectedEmail.recipientEmail})</p>
              <div className="mt-4 space-y-4">
                <div className="border p-3 rounded">
                  <p className="text-xs text-gray-500">December 6</p>
                  <p>Oops</p>
                </div>
                <div className="border p-3 rounded">
                  <p className="text-xs text-gray-500">December 4</p>
                  <p>I am having trouble logging into my account. I have tried resetting my password multiple times but I keep getting an error message saying that my email is not recognized. I have double checked and I am sure that I am using the correct email address. Could you please assist me in resolving this issue as soon as possible?</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;