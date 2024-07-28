import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);
  const { siteID } = useParams();
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://graph.microsoft.com/v1.0/sites/${siteID}/lists/7f1fe9cb-3ae4-462e-8d69-dd6873b50904/items?expand=fields`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('userAuthToken')}` },
          }
        );
        const data = await response.json();
        setFaqs(data.value);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [siteID]);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="overflow-hidden w-full bg-[#F4F8FB] min-h-screen">
      <Nav />
      <div className='w-full md:max-w-[800px] mx-auto px-4 py-6'>
        <h2 className='md:text-4xl text-2xl font-semibold text-center mb-8'>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white shadow rounded-lg overflow-hidden">
              <button
                onClick={() => handleToggle(faq.id)}
                className="flex items-center justify-between w-full p-4 text-left transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <span className="font-medium text-lg">
                  {faq.fields.Question_en}
                </span>
                <span className="text-xl">
                  {activeKey === faq.id ? '-' : '+'}
                </span>
              </button>
              <div className={`transition-height duration-500 ease-in-out overflow-hidden ${activeKey === faq.id ? 'max-h-60' : 'max-h-0'}`}>
                <div className="p-4 border-t border-gray-200">
                  <p>{faq.fields.answer_en}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
