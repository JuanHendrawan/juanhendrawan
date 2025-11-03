// Global project data - Update dengan BTS content
const allProjects = [
    {
        id: 1,
        title: "Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI",
        type: "photo",
        category: "documentary",
        image: "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_033.webp",
        description: "A series of portrait photographs taken in urban environments, showcasing the contrast between human subjects and city landscapes.",
        date: "July 2023",
        client: "Bayu Buana Travel Servies",
        tags: ["documentary"],
        galleryImages: [
            "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_001.webp",
            "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_033.webp",
            "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_044.webp",
            "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_045.webp",
            "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_062.webp",
            "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_180.webp",
            "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_209.webp",
            "assets/images/Bayu Buana Travel Servies - 7D EXOTIC JAVA + BALI/Friday_07 July 2023_443.webp"
        ],
        // BTS Video untuk project photo
        btsVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        btsVideoTitle: "Behind the Scenes - Urban Portraits"
    },
    {
        id: 2,
        title: "Mountain Landscapes",
        type: "photo",
        category: "landscape",
        image: "assets/images/project2.jpg",
        description: "Capturing the majestic beauty of mountain ranges during different times of the day and seasons.",
        date: "May 2023",
        client: "Nature Magazine",
        tags: ["landscape", "mountains", "nature", "outdoor"],
        galleryImages: [
            "assets/images/project2.jpg",
            "assets/images/project1.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        // BTS Video untuk project photo
        btsVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        btsVideoTitle: "Behind the Scenes - Mountain Photography"
    },
    {
        id: 3,
        title: "Sarah & Michael Wedding",
        type: "video",
        category: "wedding",
        image: "assets/images/project3.jpg",
        description: "A cinematic wedding video capturing the special moments of Sarah and Michael's beautiful ceremony.",
        date: "April 2023",
        client: "Sarah & Michael",
        tags: ["wedding", "ceremony", "cinematic", "love story"],
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        // BTS Photos untuk project video
        btsPhotos: [
            "assets/images/project1.jpg",
            "assets/images/project2.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        btsTitle: "Behind the Scenes - Wedding Day"
    },
    {
        id: 4,
        title: "Corporate Event Coverage",
        type: "photo",
        category: "event",
        image: "assets/images/project4.jpg",
        description: "Documenting a large corporate conference with keynote speakers, workshops, and networking sessions.",
        date: "March 2023",
        client: "TechCorp Inc.",
        tags: ["corporate", "event", "conference", "business"],
        galleryImages: [
            "assets/images/project4.jpg",
            "assets/images/project1.jpg",
            "assets/images/project2.jpg",
            "assets/images/project3.jpg"
        ],
        // BTS Video untuk project photo
        btsVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        btsVideoTitle: "Behind the Scenes - Corporate Event"
    },
    // ... tambahkan properti BTS untuk project lainnya
    {
        id: 1,
        title: "Urban Portraits",
        type: "photo",
        category: "portrait",
        image: "assets/images/project1.jpg",
        description: "A series of portrait photographs taken in urban environments, showcasing the contrast between human subjects and city landscapes.",
        date: "June 2023",
        client: "Personal Project",
        tags: ["portrait", "urban", "street", "black & white"],
        galleryImages: [
            "assets/images/project1.jpg",
            "assets/images/project2.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        btsVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        btsVideoTitle: "Behind the Scenes - Urban Portraits",
        fullDescription: `
            <p>Urban Portraits is a personal project that explores the relationship between human subjects and their urban environments. This series was shot over a period of three months in various locations throughout Jakarta, focusing on capturing authentic moments in everyday urban settings.</p>
            
            <p>The concept behind this project was to showcase the contrast between the organic, emotional nature of human subjects and the structured, sometimes harsh environment of the city. Each portrait tells a unique story about the individual while also commenting on urban life and the spaces we inhabit.</p>
            
            <p>Technical challenges included working with natural light in unpredictable urban settings and finding creative ways to use architectural elements as framing devices. The black and white treatment was chosen to emphasize texture, form, and emotion while removing the distraction of color.</p>
            
            <p>This project has been featured in several local photography exhibitions and has received recognition for its unique approach to urban portraiture.</p>
        `
    },
    {
        id: 2,
        title: "Mountain Landscapes",
        type: "photo",
        category: "landscape",
        image: "assets/images/project2.jpg",
        description: "Capturing the majestic beauty of mountain ranges during different times of the day and seasons.",
        date: "May 2023",
        client: "Nature Magazine",
        tags: ["landscape", "mountains", "nature", "outdoor"],
        galleryImages: [
            "assets/images/project2.jpg",
            "assets/images/project1.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        btsVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        btsVideoTitle: "Behind the Scenes - Mountain Photography",
        fullDescription: `
            <p>This landscape photography project was commissioned by Nature Magazine to capture the stunning beauty of mountain ranges across Indonesia. The assignment spanned two weeks and covered three different volcanic regions: Mount Bromo, Mount Rinjani, and Mount Semeru.</p>
            
            <p>The primary challenge was capturing these majestic landscapes during the golden hours while dealing with unpredictable weather conditions. Each location required extensive planning and multiple visits to get the perfect shot. The goal was to showcase not just the mountains themselves, but the ever-changing interplay of light, shadow, and atmosphere that makes each moment unique.</p>
            
            <p>Technical considerations included using neutral density filters for long exposures of moving clouds, careful attention to composition to create depth and scale, and post-processing techniques that enhanced the natural beauty without appearing overly manipulated.</p>
            
            <p>The resulting images were published as a 12-page feature in Nature Magazine's special edition on Indonesian landscapes, with several images also being selected for their annual calendar.</p>
        `
    },
    {
        id: 3,
        title: "Sarah & Michael Wedding",
        type: "video",
        category: "wedding",
        image: "assets/images/project3.jpg",
        description: "A cinematic wedding video capturing the special moments of Sarah and Michael's beautiful ceremony.",
        date: "April 2023",
        client: "Sarah & Michael",
        tags: ["wedding", "ceremony", "cinematic", "love story"],
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        btsPhotos: [
            "assets/images/project1.jpg",
            "assets/images/project2.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        btsTitle: "Behind the Scenes - Wedding Day",
        // Contoh full description dengan section tambahan
        fullDescription: `
            <p>Urban Portraits is a personal project that explores the relationship between human subjects and their urban environments. This series was shot over a period of three months in various locations throughout Jakarta, focusing on capturing authentic moments in everyday urban settings.</p>
            
            <p>The concept behind this project was to showcase the contrast between the organic, emotional nature of human subjects and the structured, sometimes harsh environment of the city. Each portrait tells a unique story about the individual while also commenting on urban life and the spaces we inhabit.</p>
            
            <div class="creative-process">
                <h4><i class="fas fa-lightbulb"></i> Creative Process</h4>
                <div class="process-steps">
                    <div class="process-step">
                        <h4><i class="fas fa-search"></i> Research & Location Scouting</h4>
                        <p>Two weeks spent exploring various urban locations to find settings with interesting textures, lighting, and architectural elements.</p>
                    </div>
                    <div class="process-step">
                        <h4><i class="fas fa-users"></i> Subject Selection</h4>
                        <p>Working with diverse individuals who represent different aspects of urban life and culture.</p>
                    </div>
                    <div class="process-step">
                        <h4><i class="fas fa-camera"></i> Shooting Sessions</h4>
                        <p>Multiple sessions at different times of day to capture varying lighting conditions and moods.</p>
                    </div>
                </div>
            </div>
            
            <div class="technical-details">
                <h4><i class="fas fa-cogs"></i> Technical Details</h4>
                <div class="tech-grid">
                    <div class="tech-item">
                        <i class="fas fa-camera"></i>
                        <h5>Camera</h5>
                        <p>Sony A7III</p>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-eye"></i>
                        <h5>Lens</h5>
                        <p>50mm f/1.8</p>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-sun"></i>
                        <h5>Lighting</h5>
                        <p>Natural Light</p>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-palette"></i>
                        <h5>Editing</h5>
                        <p>Lightroom & Photoshop</p>
                    </div>
                </div>
            </div>
            
            <p>Technical challenges included working with natural light in unpredictable urban settings and finding creative ways to use architectural elements as framing devices. The black and white treatment was chosen to emphasize texture, form, and emotion while removing the distraction of color.</p>
            
            <p>This project has been featured in several local photography exhibitions and has received recognition for its unique approach to urban portraiture.</p>
        `
    },
    {
        id: 4,
        title: "Corporate Event Coverage",
        type: "photo",
        category: "event",
        image: "assets/images/project4.jpg",
        description: "Documenting a large corporate conference with keynote speakers, workshops, and networking sessions.",
        date: "March 2023",
        client: "TechCorp Inc.",
        tags: ["corporate", "event", "conference", "business"],
        galleryImages: [
            "assets/images/project4.jpg",
            "assets/images/project1.jpg",
            "assets/images/project2.jpg",
            "assets/images/project3.jpg"
        ],
        btsVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        btsVideoTitle: "Behind the Scenes - Corporate Event",
        fullDescription: `
            <p>TechCorp's annual leadership conference brought together over 500 executives from across Asia for three days of keynotes, workshops, and networking. My role was to comprehensively document the event for both internal communications and marketing materials.</p>
            
            <p>The scope of work included capturing keynote presentations, breakout sessions, networking events, and candid moments between attendees. The challenge was to tell the story of the conference while working discreetly in various lighting conditions and crowded spaces.</p>
            
            <p>Equipment used included multiple camera bodies with fast prime lenses for low-light situations, off-camera flash for formal portraits, and a portable studio setup for executive headshots. A team of two assistants helped manage equipment and ensure we covered all simultaneous sessions.</p>
            
            <p>Post-event, we delivered over 800 edited images organized by session and event type. The images were used in TechCorp's internal newsletter, social media campaigns, and as promotional material for their following year's conference.</p>
        `
    },
    {
        id: 1,
        title: "Urban Portraits",
        type: "photo",
        category: "portrait",
        image: "assets/images/project1.jpg",
        description: "A series of portrait photographs taken in urban environments, showcasing the contrast between human subjects and city landscapes.",
        date: "June 2023",
        client: "Personal Project",
        tags: ["portrait", "urban", "street", "black & white"],
        galleryImages: [
            "assets/images/project1.jpg",
            "assets/images/project2.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        fullDescription: `
            <p>Urban Portraits is a personal project that explores the relationship between human subjects and their urban environments. This series was shot over a period of three months in various locations throughout Jakarta, focusing on capturing authentic moments in everyday urban settings.</p>
            
            <p>The concept behind this project was to showcase the contrast between the organic, emotional nature of human subjects and the structured, sometimes harsh environment of the city. Each portrait tells a unique story about the individual while also commenting on urban life and the spaces we inhabit.</p>
        `,
        // BTS Content yang bisa berisi foto dan video
        btsContent: {
            title: "Behind The Scenes - Urban Portraits",
            items: [
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Shooting Process",
                    description: "Watch how we captured these urban portraits"
                },
                {
                    type: "photo",
                    url: "assets/images/project1.jpg",
                    title: "Location Scouting",
                    description: "Finding the perfect urban backdrop"
                },
                {
                    type: "photo", 
                    url: "assets/images/project2.jpg",
                    title: "Lighting Setup",
                    description: "Working with natural light in urban environments"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Editing Process",
                    description: "Post-production workflow for urban portraits"
                }
            ]
        }
        
    },
    {
        id: 3,
        title: "Sarah & Michael Wedding",
        type: "video",
        category: "wedding", 
        image: "assets/images/project3.jpg",
        description: "A cinematic wedding video capturing the special moments of Sarah and Michael's beautiful ceremony.",
        date: "April 2023",
        client: "Sarah & Michael",
        tags: ["wedding", "ceremony", "cinematic", "love story"],
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        fullDescription: `
            <p>Sarah and Michael's wedding was a beautiful outdoor ceremony held at a private estate in Bogor. The couple wanted a cinematic approach to their wedding video that would capture not just the events of the day, but the emotions and atmosphere as well.</p>
        `,
        btsContent: {
            title: "Behind The Scenes - Wedding Day",
            items: [
                {
                    type: "photo",
                    url: "assets/images/project1.jpg",
                    title: "Preparation Moments",
                    description: "Bride and groom getting ready"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Ceremony Setup",
                    description: "Setting up cameras for the perfect ceremony shots"
                },
                {
                    type: "photo",
                    url: "assets/images/project2.jpg", 
                    title: "Reception Details",
                    description: "Capturing the beautiful reception decorations"
                },
                {
                    type: "photo",
                    url: "assets/images/project3.jpg",
                    title: "Candid Moments",
                    description: "Spontaneous moments throughout the day"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Editing Workflow",
                    description: "Turning raw footage into a cinematic story"
                }
            ]
        }
    },
    {
        id: 1,
        title: "Urban Portraits",
        type: "photo",
        category: "portrait",
        image: "assets/images/project1.jpg",
        description: "A series of portrait photographs taken in urban environments.",
        date: "June 2023",
        client: "Personal Project",
        tags: ["portrait", "urban", "street", "black & white"],
        galleryImages: [
            "assets/images/project1.jpg",
            "assets/images/project2.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        fullDescription: `
            <p>Urban Portraits is a personal project that explores the relationship between human subjects and their urban environments.</p>
        `,
        // BTS Content dengan album foto
        btsContent: {
            title: "Behind The Scenes - Urban Portraits",
            items: [
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Shooting Process",
                    description: "Watch how we captured these urban portraits"
                },
                {
                    type: "photo-album",
                    title: "Preparation Moments",
                    description: "Bride and groom getting ready",
                    photos: [
                        "assets/images/project1.jpg",
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project1.jpg"
                },
                {
                    type: "photo-album",
                    title: "Photo Group", 
                    description: "Spontaneous moments throughout the day",
                    photos: [
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project2.jpg"
                },
                {
                    type: "photo-album",
                    title: "Reception Details",
                    description: "Capturing the beautiful reception decorations",
                    photos: [
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project3.jpg"
                }
            ]
        }
    },
    {
        id: 2,
        title: "Mountain Landscapes",
        type: "photo",
        category: "landscape",
        image: "assets/images/project2.jpg",
        description: "Capturing the majestic beauty of mountain ranges.",
        date: "May 2023",
        client: "Nature Magazine",
        tags: ["landscape", "mountains", "nature", "outdoor"],
        galleryImages: [
            "assets/images/project2.jpg",
            "assets/images/project1.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        fullDescription: `
            <p>This landscape photography project was commissioned by Nature Magazine to capture the stunning beauty of mountain ranges across Indonesia.</p>
        `,
        btsContent: {
            title: "Behind The Scenes - Mountain Photography",
            items: [
                {
                    type: "photo-album",
                    title: "Sunrise Setup",
                    description: "Early morning preparation for golden hour shots",
                    photos: [
                        "assets/images/project1.jpg",
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg"
                    ],
                    coverImage: "assets/images/project1.jpg"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Hiking to Location",
                    description: "The journey to reach the perfect vantage point"
                },
                {
                    type: "photo-album",
                    title: "Equipment Setup",
                    description: "Camera gear used for landscape photography",
                    photos: [
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg"
                    ],
                    coverImage: "assets/images/project2.jpg"
                }
            ]
        }
    },
    {
        id: 3,
        title: "Sarah & Michael Wedding",
        type: "video",
        category: "wedding",
        image: "assets/images/project3.jpg",
        description: "A cinematic wedding video capturing special moments.",
        date: "April 2023",
        client: "Sarah & Michael",
        tags: ["wedding", "ceremony", "cinematic", "love story"],
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        fullDescription: `
            <p>Sarah and Michael's wedding was a beautiful outdoor ceremony held at a private estate.</p>
        `,
        btsContent: {
            title: "Behind The Scenes - Wedding Day",
            items: [
                {
                    type: "photo-album",
                    title: "Preparation Moments",
                    description: "Bride and groom getting ready",
                    photos: [
                        "assets/images/project1.jpg",
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project1.jpg"
                },
                {
                    type: "photo-album",
                    title: "Photo Group",
                    description: "Spontaneous moments throughout the day",
                    photos: [
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project2.jpg"
                },
                {
                    type: "photo-album",
                    title: "Reception Details",
                    description: "Capturing the beautiful reception decorations",
                    photos: [
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project3.jpg"
                }
            ]
        }
    },
    {
        id: 2,
        title: "Mountain Landscapes",
        type: "photo", 
        category: "landscape",
        role: "Photographer",
        image: "assets/images/project2.jpg",
        description: "Capturing the majestic beauty of mountain ranges during different times of the day and seasons.",
        date: "May 2023",
        client: "Nature Magazine",
        tags: ["landscape", "mountains", "nature", "outdoor"],
        galleryImages: [
            "assets/images/project2.jpg",
            "assets/images/project1.jpg",
            "assets/images/project3.jpg",
            "assets/images/project4.jpg"
        ],
        fullDescription: `
            <p>This landscape photography project was commissioned by Nature Magazine to capture the stunning beauty of mountain ranges across Indonesia. The assignment spanned two weeks and covered three different volcanic regions: Mount Bromo, Mount Rinjani, and Mount Semeru.</p>
            
            <p>The primary challenge was capturing these majestic landscapes during the golden hours while dealing with unpredictable weather conditions. Each location required extensive planning and multiple visits to get the perfect shot. The goal was to showcase not just the mountains themselves, but the ever-changing interplay of light, shadow, and atmosphere that makes each moment unique.</p>
            
            <p>Technical considerations included using neutral density filters for long exposures of moving clouds, careful attention to composition to create depth and scale, and post-processing techniques that enhanced the natural beauty without appearing overly manipulated.</p>
            
            <p>The resulting images were published as a 12-page feature in Nature Magazine's special edition on Indonesian landscapes, with several images also being selected for their annual calendar.</p>
        `,
        btsContent: {
            title: "Behind The Scenes - Mountain Photography",
            items: [
                {
                    type: "photo-album",
                    title: "Sunrise Setup",
                    description: "Early morning preparation for golden hour shots",
                    photos: [
                        "assets/images/project1.jpg",
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg"
                    ],
                    coverImage: "assets/images/project1.jpg"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
                    title: "Hiking to Location",
                    description: "The journey to reach the perfect vantage point"
                },
                {
                    type: "photo-album",
                    title: "Equipment Setup",
                    description: "Camera gear used for landscape photography",
                    photos: [
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg"
                    ],
                    coverImage: "assets/images/project2.jpg"
                },
                {
                    type: "photo-album",
                    title: "Weather Challenges",
                    description: "Working with changing mountain weather conditions",
                    photos: [
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project3.jpg"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Time-lapse Creation",
                    description: "Creating stunning time-lapse sequences"
                }
            ]
        }
    },
    {
        id: 3,
        title: "Sarah & Michael Wedding",
        type: "video",
        category: "wedding", 
        role: "Photographer",
        image: "assets/images/project3.jpg",
        description: "A cinematic wedding video capturing the special moments of Sarah and Michael's beautiful ceremony.",
        date: "April 2023",
        client: "Sarah & Michael",
        tags: ["wedding", "ceremony", "cinematic", "love story"],
        videoURL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        fullDescription: `
            <p>Sarah and Michael's wedding was a beautiful outdoor ceremony held at a private estate in Bogor. The couple wanted a cinematic approach to their wedding video that would capture not just the events of the day, but the emotions and atmosphere as well.</p>
            
            <p>Pre-production involved multiple meetings with the couple to understand their vision and story. We developed a shot list that included both traditional wedding moments and creative, cinematic sequences. The ceremony itself was shot using three cameras to ensure comprehensive coverage from multiple angles.</p>
            
            <p>Technical execution involved using gimbal stabilization for smooth movement shots, drone footage to establish the beautiful venue, and careful audio recording to capture vows and speeches clearly. The edit focused on creating an emotional narrative arc that followed the couple's journey throughout the day.</p>
            
            <p>The final 8-minute highlight film was delivered in 4K resolution and included a full-length ceremony edit for the family archive. The couple was thrilled with the result, noting that the video perfectly captured the emotion and beauty of their special day.</p>
        `,
        btsContent: {
            title: "Behind The Scenes - Wedding Day",
            items: [
                {
                    type: "photo-album",
                    title: "Preparation Moments",
                    description: "Bride and groom getting ready",
                    photos: [
                        "assets/images/project1.jpg",
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project1.jpg"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Ceremony Setup",
                    description: "Setting up cameras for the perfect ceremony shots"
                },
                {
                    type: "photo-album",
                    title: "Photo Group",
                    description: "Spontaneous moments throughout the day",
                    photos: [
                        "assets/images/project2.jpg",
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project2.jpg"
                },
                {
                    type: "photo-album",
                    title: "Reception Details",
                    description: "Capturing the beautiful reception decorations",
                    photos: [
                        "assets/images/project3.jpg",
                        "assets/images/project4.jpg"
                    ],
                    coverImage: "assets/images/project3.jpg"
                },
                {
                    type: "video",
                    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    title: "Editing Workflow",
                    description: "Turning raw footage into a cinematic story"
                }
            ]
        }
    },
    
    // ... tambahkan fullDescription untuk project lainnya
];