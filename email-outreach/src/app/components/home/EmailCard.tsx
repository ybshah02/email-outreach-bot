"use client";

interface EmailCardProps {
    recipientName: string;
    recipientEmail: string;
    subject: string;
  }
  
  const EmailCard: React.FC<EmailCardProps> = ({ recipientName, recipientEmail, subject }) => {
    return (
      <div className="border p-4 rounded flex justify-between items-center">
        <div>
          <h3 className="font-bold">{recipientName}</h3>
          <p>{recipientEmail}</p>
          <p>{subject}</p>
        </div>
        <button className="text-blue-500 hover:underline">
          View Email
        </button>
      </div>
    );
  };
  
  export default EmailCard;