import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VoteForCandidate = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(location.search);
    const post = urlParams.get('post');
    let voteCount = 0;

    const candidates = {
        'president': ['Candidate A', 'Candidate B', 'Candidate C'],
        'vice-president': ['Candidate D', 'Candidate E', 'Candidate F'],
        'secretary': ['Candidate G', 'Candidate H', 'Candidate I'],
        'assistant-secretary': ['Candidate J', 'Candidate K', 'Candidate L']
    };

    const createCandidateButtons = () => {
        if (candidates[post]) {
            return candidates[post].map(candidate => (
                <button key={candidate} onClick={() => castVote(candidate)}>
                    {candidate}
                </button>
            ));
        }
        return null;
    };

    const castVote = (candidate) => {
        alert(`You voted for ${candidate}!`);
        voteCount++;

        let votedPosts = JSON.parse(localStorage.getItem('votedPosts')) || [];
        if (!votedPosts.includes(post)) {
            votedPosts.push(post);
            localStorage.setItem('votedPosts', JSON.stringify(votedPosts));
        }

        setTimeout(() => {
            if (voteCount !== candidates[post].length) {
                navigate('/');
            } else {
                navigate('/thankyou');
            }
        }, 3000); // 3 seconds delay before redirect
    };

    return (
        <div style={styles.container}>
            <h2>Vote for {post.replace('-', ' ').toUpperCase()}</h2>
            <div>{createCandidateButtons()}</div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Algerian, sans-serif',
    },
};

export default VoteForCandidate;