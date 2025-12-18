// Load and display all content
function loadFiles() {
    // Audio files - add your audio file names here
    const audioFiles = [
        'University of Notre Dame 2.m4a',
        'University of Notre Dame 3.m4a'
    ];
    
    displayAudioFiles(audioFiles);
    displayIndependentStories();
    displayEssays();
}

function displayAudioFiles(audioFiles) {
    const audioGrid = document.getElementById('audio-grid');
    
    if (audioFiles.length === 0) {
        audioGrid.innerHTML = '<p class="empty-message">No audio files found. Add files to the /audio directory.</p>';
        return;
    }
    
    audioGrid.innerHTML = audioFiles.map(file => {
        const fileName = file.replace(/\.[^/.]+$/, ''); // Remove extension
        const fileExtension = file.split('.').pop().toLowerCase();
        
        // Map file extensions to correct MIME types
        const mimeTypes = {
            'mp3': 'audio/mpeg',
            'wav': 'audio/wav',
            'ogg': 'audio/ogg',
            'm4a': 'audio/mp4',
            'aac': 'audio/aac',
            'webm': 'audio/webm'
        };
        
        if (['mp3', 'wav', 'ogg', 'm4a', 'aac', 'webm'].includes(fileExtension)) {
            const mimeType = mimeTypes[fileExtension] || `audio/${fileExtension}`;
            return `
                <div class="audio-card">
                    <h4>${fileName}</h4>
                    <audio controls preload="metadata" style="width: 100%; margin-top: 0.75rem;">
                        <source src="audio/${encodeURIComponent(file)}" type="${mimeType}">
                        <source src="audio/${encodeURIComponent(file)}" type="audio/mpeg">
                        Your browser does not support the audio element. 
                        <a href="audio/${encodeURIComponent(file)}" download>Download audio file</a>
                    </audio>
                </div>
            `;
        } else {
            return `
                <div class="audio-card">
                    <h4>${fileName}</h4>
                    <p>Audio file: ${file}</p>
                    <a href="audio/${encodeURIComponent(file)}" target="_blank" class="btn">Download</a>
                </div>
            `;
        }
    }).join('');
}

function displayIndependentStories() {
    const independentGrid = document.getElementById('independent-grid');
    
    // Independent stories with Google Docs links
    const independentStories = [
        {
            title: 'Des Invitations French Assignment',
            link: 'https://docs.google.com/document/d/1EpfjHp145ACygRqlrPUDcQas9dSCbaOjFjAs6p6ywGg/edit?usp=drive_link'
        },
        {
            title: 'French Assignment',
            link: 'https://docs.google.com/document/d/1EuBoUNL4QcHx_G-elELIf9_tLNetqkEUcIwPjq17Muc/edit?usp=drive_link'
        }
    ];
    
    independentGrid.innerHTML = independentStories.map(story => {
        return `
            <div class="story-card">
                <h4>${story.title}</h4>
                <p>Independent Assignment</p>
                <a href="${story.link}" target="_blank" class="btn">View Assignment</a>
            </div>
        `;
    }).join('');
}

function displayEssays() {
    const classEssaysGrid = document.getElementById('class-essays-grid');
    
    // Class essays with Google Docs links
    const classEssaysList = [
        {
            title: 'Ecrivon',
            link: 'https://docs.google.com/document/d/1DIca8ROIGbtIn8Gc7zc22Iv-2NauyHAmkHLMUJnLdEI/edit?usp=drive_link'
        },
        {
            title: 'French Draft',
            link: 'https://docs.google.com/document/d/1CwuN3dNQq1sUCpI7YOfq8GzZi7M619SaoKY-pHosjAE/edit?usp=drive_link'
        },
        {
            title: 'French Extracurriculars',
            link: 'https://docs.google.com/document/d/1QlYxm4DvEMajyfAMScb_HQ7dvtfZDY62NAiZlTaWuWQ/edit?usp=drive_link'
        },
        {
            title: 'French Group Presentation',
            link: 'https://docs.google.com/document/d/1SH-6fsO6Ok3Xasyac2zsB3UDLagbQ61rABDJAZ6JZUw/edit?usp=drive_link'
        },
        {
            title: 'French Midterm Oral',
            link: 'https://docs.google.com/document/d/1Rcov3OKDVb94iOV-rwvh1MWcA_jeipP-jp0TJXoEahI/edit?usp=drive_link'
        },
        {
            title: 'French Script Draft',
            link: 'https://docs.google.com/document/d/1DQ3uTzuqEOXsXRglFMW3P4M4SrdDMJvy0a301al0-Ek/edit?usp=drive_link'
        },
        {
            title: 'Post Card Rough',
            link: 'https://docs.google.com/document/d/1CIcYcllhghp-fpcOxK3rqo4vXpo7VdNX5xVPEoVM44w/edit?usp=drive_link'
        },
        {
            title: 'Presentez-vous',
            link: 'https://docs.google.com/document/d/1AbpxSnSwi-cvRYHFRdUh1FByx8QQ6EE9toWJpAdFVcQ/edit?usp=drive_link'
        },
        {
            title: 'Reduction 2',
            link: 'https://docs.google.com/document/d/1d6ZjG3YbkF4HrdGNYGNitDqqV3x8fLKVq-dhCS_nOdQ/edit?usp=drive_link'
        }
    ];
    
    // Combine Google Docs essays (uploaded files would be added here if needed)
    const allClassEssays = classEssaysList.map(essay => ({
        title: essay.title,
        link: essay.link,
        isGoogleDoc: true
    }));
    
    if (allClassEssays.length === 0) {
        classEssaysGrid.innerHTML = '<p class="empty-message">No class essays found.</p>';
    } else {
        classEssaysGrid.innerHTML = allClassEssays.map(essay => {
            return `
                <div class="essay-card">
                    <h4>${essay.title}</h4>
                    <p class="essay-description">Class Essay</p>
                    <a href="${essay.link}" target="_blank" class="btn">
                        ${essay.isGoogleDoc ? 'View Essay' : (essay.isPDF ? 'Read Essay' : 'View Essay')}
                    </a>
                </div>
            `;
        }).join('');
    }
    
    // Final essays
    const finalEssays = [
        {
            title: 'Pourquoi le français?',
            description: 'Final essay exploring the importance and reasons for learning French',
            link: null // Will be set if file exists
        },
        {
            title: 'French Final',
            description: 'Final essay assignment',
            link: 'https://docs.google.com/document/d/1DAGL_a8NbzVkEL8s_ZP8Yy7FDnp0hzE98JSj21GGPOw/edit?usp=drive_link'
        }
    ];
    
    // Check if final essay file exists (for GitHub Pages, you can add the file path here)
    // Example: finalEssays[0].link = 'essays/Pourquoi le francais.pdf';
    // For now, leaving it as null if no file is uploaded
    
    const finalEssayGrid = document.getElementById('final-essay-grid');
    finalEssayGrid.innerHTML = finalEssays.map(essay => {
        if (!essay.link) {
            return ''; // Skip if no link available
        }
        const isGoogleDoc = essay.link.startsWith('http');
        const fileExtension = essay.link.split('.').pop().toLowerCase();
        const isPDF = fileExtension === 'pdf' && !isGoogleDoc;
        
        return `
            <div class="essay-card featured">
                <h4>${essay.title}</h4>
                <p class="essay-description">${essay.description}</p>
                <a href="${essay.link}" target="_blank" class="btn">
                    ${isGoogleDoc ? 'View Essay' : (isPDF ? 'Read Essay' : 'View Essay')}
                </a>
            </div>
        `;
    }).join('');
}

function showError(message) {
    const sections = document.querySelectorAll('.content-grid');
    sections.forEach(section => {
        if (section.innerHTML.includes('Loading')) {
            section.innerHTML = `<p class="empty-message">${message}</p>`;
        }
    });
}

// Load files when page loads
document.addEventListener('DOMContentLoaded', loadFiles);

