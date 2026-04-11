import aidenImg from '../assets/Team/Aiden Robinson.jpeg';
import allyImg from '../assets/Team/Ally Hernandez 01.jpeg';
import andresImg from '../assets/Team/AndresRojas.jpeg';
import connorImg from '../assets/Team/Connor Usaty 02.jpeg';
import fatimaImg from '../assets/Team/Fatima Malik.jpg';
import iainImg from '../assets/Team/Iain Macdonald.jpeg';
import leonImg from '../assets/Team/Leon Yao.jpeg';
import jodieImg from '../assets/Team/LobanaJodie.jpeg';
import megannImg from '../assets/Team/Megann Nkenglack.jpeg';
import nicoleImg from '../assets/Team/Nicole Sorokin 01.jpeg';
import rituImg from '../assets/Team/Ritu Grewal.jpg';
import sebastianImg from '../assets/Team/SebastianMaurice.jpeg';
import tamillaImg from '../assets/Team/Tamilla Zeynalova.jpeg';
import tiyaImg from '../assets/Team/Tiya Jathan 02.jpeg';
import calderImg from '../assets/Team/CalderSmith.jpg';
import marcoImg from '../assets/Team/MarcoDava.png';
import danielImg from '../assets/Team/DanielNguyen.png';
import jackImg from '../assets/Team/JackEaston.jpg';

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface AdvisoryBoardMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

export const EXEC_TEAM: TeamMember[] = [
  { name: 'Connor Usaty', role: 'Co-President', image: connorImg },
  { name: 'Aiden Robinson', role: 'Co-President', image: aidenImg },
  { name: 'Nicole Sorokin', role: 'President MacHacks', image: nicoleImg },
  { name: 'Ally Hernandez', role: 'VP Marketing', image: allyImg },
  { name: 'Ritu Grewal', role: 'VP Finance', image: rituImg },
  { name: 'Leon Yao', role: 'Co-VP Logistics', image: leonImg },
  { name: 'Megann Nkenglack', role: 'Co-VP Logistics', image: megannImg },
  { name: 'Iain MacDonald', role: 'VP Technical', image: iainImg },
  { name: 'Tiya Jathan', role: 'Director of Partnerships', image: tiyaImg },
  { name: 'Calder Smith', role: 'VP Partnerships', image: calderImg },
  { name: 'Tamilla Zeynalova', role: 'Director of Education', image: tamillaImg },
  { name: 'Fatima Malik', role: 'Director of Attendee Relations', image: fatimaImg },
  { name: 'Marco Dava', role: 'Web Development Lead', image: marcoImg },
  { name: 'Daniel Nguyen', role: 'Web Developer', image: danielImg },
  { name: 'Jack Easton', role: 'Quality Assurance', image: jackImg },
];

export const ADVISORY_BOARD: AdvisoryBoardMember[] = [
  {
    name: 'Dr. Jodie Lobana',
    title: 'Chair',
    image: jodieImg,
    linkedin: 'https://linkedin.com/in/jodielobana',
    bio: `"Empowering the future through AI governance," Dr. Jodie Lobana is a distinguished Director, Educator, Author, and award-winning Management Consultant. Her integrated expertise spans Governance of Artificial Intelligence and other Information Technologies, Risk Management, Internal Audit, Project Management, Human Resources, Accounting & Finance.

Dr. Lobana's forthcoming book, "Holistic Governance of Artificial Intelligence," reflects her groundbreaking Ph.D. thesis research. Her consulting firm delivers cutting-edge training and consulting services in AI governance and risk management to provide large corporations and national governments.

A dedicated educator, Dr. Lobana currently imparts her knowledge as a Course Director at York University in Canada, teaching "Governance of Information Technology" to graduate students. In the past year, she taught courses at Queen's University, where she delivered an AI Ethics course to Master's level students, and at McMaster University, where she taught "Customer Value Generation" using digital means. Previously, she has also taught at the University of Waterloo and IIT. Dr. Lobana holds a doctoral degree in business administration, with a thesis focus on AI governance, and possesses several additional designations, including CPA, CA, CIA, and CISA.

Passionate about shaping the future, Dr. Lobana has recently completed her tenure as a Board Member of the International Internal Audit Standards Board and is currently serving as the Chair of the Advisory Board of the McMaster Artificial Intelligence Society. She previously held the position of Chair of the Technology Steering Committee of OECM and served on various boards, including the University of Waterloo's UWCISA Institute, IIA Canada, and CPA Canada's Technology Advisory Committee. Dr. Lobana was instrumental in initiating a memorandum of understanding between CPA Canada and IIA Canada, fostering collaboration and strengthening the industry for the betterment of society.

With a wealth of experience, Dr. Lobana has provided services to over 50 national and multinational organizations across various industries, traveling to more than 40 countries and working in 7. Her remarkable accomplishments include the prestigious "2013 Award of Distinction" from CPA Ontario, the "2019 Mary Keyes Award for Outstanding Leadership and Service to McMaster," "McMaster Women in Tech Aug 2020 Changemaker," and the latest "Modern Governance 100 award 2023."`,
  },
  {
    name: 'Sebastian Maurice',
    title: 'Member',
    image: sebastianImg,
    linkedin: 'https://www.linkedin.com/in/sebastianmaurice/',
    bio: `Sebastian Maurice is the Founder and CTO at OTICS Advanced Analytics, a Canadian company based in Toronto, with office in Calgary. He has over 25 years industry experience in AI/ML/Data Science. He has led global AI and Data Science teams at Gartner, Accenture, Hitachi and SAS. He has a PhD in Electrical and Computer Engineering from the University of Calgary and his thesis focused on Multi-Agent systems and Modeling Cooperative Behaviours Among Software Agents. He has 8 Publications in Peer-reviewed Journals, and has a Canadian Patent in applying Machine Learning to Optimize Oil Production (Patent #: 2864265). He is also the creator of MAADS (Multi-Agent Accelerator for Data Science, an AutoML technology) Products including Python Library, IPC, VIPER, HPDE. He is also an Instructor in Data Science at the University of Toronto. In his off-time Sebastian loves long-distance running, coding, blogging and spending time with his wife and daughter.`,
  },
  {
    name: 'Andres Rojas',
    title: 'Member',
    image: andresImg,
    linkedin: 'https://www.linkedin.com/in/andres-rojas-ai',
    bio: `Andres is the Director of Applied AI Projects at the Vector Institute for Artificial Intelligence, where he is accelerating the adoption of AI in some of Canada's most influential companies. Some key areas of his work include Trustworthy AI and its Governance and translating AI quirks to the corporate environment. Andres has over 15 years of experience in the financial industry spanning more than 16 countries, designing and implementing data-enabled solutions to achieve greater operational performance, stronger risk management and enhanced business responsiveness. He is an Industrial Engineer from the University of Chile, holds an MBA from Manchester University, a certified Project Management Professional and was part of the first cohort to receive a certificate in AI from the University of Toronto. Andres' multiple interests include innovation in education and experiential learning, dabbling in application development and home automation, reading and learning across a vast range of genres and topics, and spending time with his family and dog.`,
  },
];
