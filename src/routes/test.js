import Header from "../components/Header/header";
import Footer from "../components/Footer/Footer";
import React from 'react';

function Test() {
    const teamMembers = [
        { name: "Tấn Phước" },
        { name: "Minh Phúc" },
        { name: "Minh Phú" },
        { name: "Huy Phát" },
    ];

    return (
        <div>
            <Header />
            <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <h2 className="text-3xl font-bold text-center mb-6">Team sáng lập</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.gravatar.com/avatar/?d=mp&f=y"
                                alt={`${member.name} avatar`}
                                style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '0.5rem' }}
                            />
                            <p className="text-lg font-medium">{member.name}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Test;