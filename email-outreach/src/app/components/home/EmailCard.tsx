"use client";

interface EmailCardProps {
  recipientName: string;
  recipientEmail: string;
  subject: string;
  onClick: () => void;
  isSelected: boolean;
  date: string;
  initials: string;
}

const EmailCard: React.FC<EmailCardProps> = ({
  recipientName,
  recipientEmail,
  subject,
  onClick,
  isSelected,
  date,
  initials,
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-3 border-b cursor-pointer flex items-center space-x-3 ${
        isSelected ? 'bg-purple-100' : 'bg-white'
      } hover:bg-purple-50 transition`}
    >
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold">
        {initials}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold">{recipientName}</h3>
        <p className="text-xs text-gray-500">{subject}</p>
      </div>
      <div className="text-xs text-gray-500">{date}</div>
    </div>
  );
};

export default EmailCard;
