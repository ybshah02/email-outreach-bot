import Navbar from '../components/global/Navbar';
import FilterPanel from '../components/home/FilterPanel';
import EmailCard from '../components/home/EmailCard';
import { useState } from 'react';

interface Email {
  recipientName: string;
  recipientEmail: string;
  subject: string;
}

const emails: Email[] = Array(20).fill({
  recipientName: 'John Doe',
  recipientEmail: 'john.doe@example.com',
  subject: 'Meeting Reminder',
});

const Home = () => {
  const [filter, setFilter] = useState<string>('');

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex">
        <FilterPanel setFilter={setFilter} />
        <main className="w-3/4">
          <div className="flex justify-end mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              + New Email
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {emails.map((email, index) => (
              <EmailCard
                key={index}
                recipientName={email.recipientName}
                recipientEmail={email.recipientEmail}
                subject={email.subject}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;