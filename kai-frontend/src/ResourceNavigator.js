import React from "react";

function ResourceNavigator() {
  const resources = [
    { name: "Mental Health Helpline", link: "tel:1800233" },
    { name: "Childline", link: "tel:1098" },
    { name: "Talk to a Counselor", link: "https://www.therapistindia.com" },
    { name: "Mental Health Info", link: "https://www.mentalhealth.gov" },
  ];

  return (
    <div style={{ marginTop: "40px", padding: "20px", borderTop: "1px solid #ccc" }}>
      <h2>Resource Navigator</h2>
      <ul>
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.link} target="_blank" rel="noopener noreferrer">{res.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceNavigator;
