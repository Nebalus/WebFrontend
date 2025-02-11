import React from 'react';
import { Link } from 'react-router-dom';

// DOES NOT WORK
export default function ExternalLink(link) => {
  return (
    <Link 
      to={link} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      GitHub Repository
    </Link>
  );
};