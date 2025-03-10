document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to grid items
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#111';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#0a0a0a';
        });
    });
    
    // Handle certifications section hover effects
    const certificationsSection = document.querySelector('.certifications');
    if (certificationsSection) {
        const certificationItems = certificationsSection.querySelectorAll('.certification-item');
        
        certificationItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.opacity = '1';
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.opacity = '0.8';
                this.style.transform = 'translateX(0)';
            });
        });
    }
    
    // Add click events to navigation links
    const navLinks = document.querySelectorAll('.nav-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Example of showing a contact form or modal
            alert('Contact form would open here. Add your own modal or form implementation.');
        });
    });
    
    // Enhanced skill items interaction
    const skillItems = document.querySelectorAll('.skill-item');
    const skillsContainer = document.querySelector('.skills-container');
    
    // Ripple effect when clicking skills
    skillItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Get position
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            // Set position and animate
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            // Remove after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Projects tile link functionality - Personal Projects
    const personalProjectsTile = document.getElementById('personal-projects-tile');
    const personalTimelineLink = document.getElementById('personal-timeline-link');
    
    if (personalProjectsTile && personalTimelineLink) {
        personalProjectsTile.addEventListener('mouseenter', function() {
            personalProjectsTile.style.backgroundColor = '#111';
            personalTimelineLink.style.opacity = '0.2'; // Make link slightly visible on hover
        });
        
        personalProjectsTile.addEventListener('mouseleave', function() {
            personalProjectsTile.style.backgroundColor = '#0a0a0a';
            personalTimelineLink.style.opacity = '0';
        });
        
        // This will redirect on click anywhere in the tile
        personalProjectsTile.addEventListener('click', function() {
            window.location.href = personalTimelineLink.href;
        });
    }
    
    // Projects tile link functionality - Course Projects
    const courseProjectsTile = document.getElementById('course-projects-tile');
    const courseTimelineLink = document.getElementById('course-timeline-link');
    
    if (courseProjectsTile && courseTimelineLink) {
        courseProjectsTile.addEventListener('mouseenter', function() {
            courseProjectsTile.style.backgroundColor = '#111';
            courseTimelineLink.style.opacity = '0.2'; // Make link slightly visible on hover
        });
        
        courseProjectsTile.addEventListener('mouseleave', function() {
            courseProjectsTile.style.backgroundColor = '#0a0a0a';
            courseTimelineLink.style.opacity = '0';
        });
        
        // This will redirect on click anywhere in the tile
        courseProjectsTile.addEventListener('click', function() {
            window.location.href = courseTimelineLink.href;
        });
    }
    
    // Optional: Add interaction for featured projects
    const featuredItems = document.querySelectorAll('.featured-project-item');
    
    featuredItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'all 0.3s ease';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.backgroundColor = 'transparent';
        });
    });
});