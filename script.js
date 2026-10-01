/* Extracted JavaScript from index.html */
const defaultConfig = {
    background_color: '#0a0a0a',
    surface_color: '#1a1a1a',
    text_color: '#f3f4f6',
    primary_action_color: '#dc2626',
    accent_color: '#ef4444',
    font_family: 'Outfit',
    font_size: 16,
    name: 'Welcome To My Portfolio',
    tagline: 'Cybersecurity Enthusiast & Tech Learner',
    intro_text: 'Passionate about learning cybersecurity and exploring new technologies to build secure systems.',
    about_text: 'My name is Muhammed Namshan, a cybersecurity graduate with a strong interest in network security, ethical hacking, and system protection. I am passionate about understanding how systems work and how to secure them against real-world threats. I am continuously learning and improving my skills, and I am motivated to grow in the cybersecurity and IT field.',
    skill_1_title: 'Cybersecurity',
    skill_1_desc: 'Learning penetration testing, vulnerability assessment, and threat analysis',
    skill_2_title: 'Networking',
    skill_2_desc: 'Understanding network architecture, protocols, and security basics',
    skill_3_title: 'Linux',
    skill_3_desc: 'Exploring system administration and command line basics',
    skill_4_title: 'Programming',
    skill_4_desc: 'Learning Python and scripting for security tools',
    project_1_title: 'Network Security Scanner',
    project_1_desc: 'Developing a Python-based network scanning tool to identify open ports and basic security issues, while strengthening my understanding of network security concepts.',
    project_2_title: 'Encryption & Decryption Tool (Graduation Project)',
    project_2_desc: 'Designed and developed a graduation project focused on encryption and decryption, implementing secure algorithms to protect sensitive data. The project strengthened my understanding of cryptographic concepts, data security, and secure software development practices.',
    project_3_title: 'Password Strength Analysis Tool',
    project_3_desc: 'Developed a tool to analyze password strength based on length, complexity, and common attack patterns. The project focuses on improving password security awareness and understanding common weaknesses in user-generated passwords.',
    project_tags: [
        ['Python','Nmap','Security'],
        ['Python','Cryptography','Security'],
        ['Python','Password Security','Security Analysis']
    ],
    contact_heading: 'Get In Touch',
    contact_text: "I'm always interested in learning about new opportunities and connecting with others in the cybersecurity field. Feel free to reach out!",
    footer_text: '© 2026 Muhammed Namshan. Learning & Growing in Cybersecurity.'
};

async function onConfigChange(config) {
    const bgColor = config.background_color || defaultConfig.background_color;
    const surfaceColor = config.surface_color || defaultConfig.surface_color;
    const textColor = config.text_color || defaultConfig.text_color;
    const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;
    const accentColor = config.accent_color || defaultConfig.accent_color;
    const fontFamily = config.font_family || defaultConfig.font_family;
    const fontSize = config.font_size || defaultConfig.font_size;

    // Apply background (use only the batch update)
    document.querySelectorAll('.bg-black').forEach(el => {
        el.style.backgroundColor = bgColor;
    });

    // Apply surface colors
    document.querySelectorAll('.skill-card, .project-card, .about-card').forEach(el => {
        el.style.background = `linear-gradient(145deg, ${surfaceColor} 0%, ${bgColor} 100%)`;
    });

    // Apply text color
    document.body.style.color = textColor;

    // Apply primary action and accent colors (reuse single theme style element)
    let themeStyle = document.getElementById('theme-style');
    if (!themeStyle) {
        themeStyle = document.createElement('style');
        themeStyle.id = 'theme-style';
        document.head.appendChild(themeStyle);
    }
    themeStyle.textContent = `
        .gradient-text {
            background: linear-gradient(135deg, ${primaryActionColor} 0%, ${accentColor} 50%, ${accentColor} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .cta-button {
            background: linear-gradient(135deg, ${primaryActionColor} 0%, ${accentColor} 100%);
        }
        .skill-icon-circle {
            background: linear-gradient(135deg, ${primaryActionColor} 0%, ${accentColor} 100%);
        }
        .social-icon::before {
            background: linear-gradient(135deg, ${primaryActionColor} 0%, ${accentColor} 100%);
        }
        .section-title::after {
            background: linear-gradient(90deg, ${primaryActionColor}, ${accentColor});
        }
    `;

    // Apply font
    document.body.style.fontFamily = `${fontFamily}, Outfit, sans-serif`;

    // Apply font sizes
    document.getElementById('name').style.fontSize = `${fontSize * 4}px`;
    document.getElementById('tagline').style.fontSize = `${fontSize * 1.75}px`;
    document.getElementById('intro-text').style.fontSize = `${fontSize * 1.125}px`;

    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
        h2.style.fontSize = `${fontSize * 2.5}px`;
    });

    const h3Elements = document.querySelectorAll('h3');
    h3Elements.forEach(h3 => {
        h3.style.fontSize = `${fontSize * 1.5}px`;
    });

    const pElements = document.querySelectorAll('p');
    pElements.forEach(p => {
        p.style.fontSize = `${fontSize}px`;
    });

    // Apply text content
    document.getElementById('name').textContent = config.name || defaultConfig.name;
    document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
    document.getElementById('intro-text').textContent = config.intro_text || defaultConfig.intro_text;
    document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
    document.getElementById('skill-1-title').textContent = config.skill_1_title || defaultConfig.skill_1_title;
    document.getElementById('skill-1-desc').textContent = config.skill_1_desc || defaultConfig.skill_1_desc;
    document.getElementById('skill-2-title').textContent = config.skill_2_title || defaultConfig.skill_2_title;
    document.getElementById('skill-2-desc').textContent = config.skill_2_desc || defaultConfig.skill_2_desc;
    document.getElementById('skill-3-title').textContent = config.skill_3_title || defaultConfig.skill_3_title;
    document.getElementById('skill-3-desc').textContent = config.skill_3_desc || defaultConfig.skill_3_desc;
    document.getElementById('skill-4-title').textContent = config.skill_4_title || defaultConfig.skill_4_title;
    document.getElementById('skill-4-desc').textContent = config.skill_4_desc || defaultConfig.skill_4_desc;
    document.getElementById('project-1-title').textContent = config.project_1_title || defaultConfig.project_1_title;
    document.getElementById('project-1-desc').textContent = config.project_1_desc || defaultConfig.project_1_desc;
    document.getElementById('project-2-title').textContent = config.project_2_title || defaultConfig.project_2_title;
    document.getElementById('project-2-desc').textContent = config.project_2_desc || defaultConfig.project_2_desc;
    document.getElementById('project-3-title').textContent = config.project_3_title || defaultConfig.project_3_title;
    document.getElementById('project-3-desc').textContent = config.project_3_desc || defaultConfig.project_3_desc;
    document.getElementById('contact-heading').textContent = config.contact_heading || defaultConfig.contact_heading;
    document.getElementById('contact-text').textContent = config.contact_text || defaultConfig.contact_text;
    document.getElementById('footer-text').textContent = config.footer_text || defaultConfig.footer_text;
}

function mapToCapabilities(config) {
    return {
        recolorables: [
            {
                get: () => config.background_color || defaultConfig.background_color,
                set: (value) => {
                    config.background_color = value;
                    window.elementSdk.setConfig({ background_color: value });
                }
            },
            {
                get: () => config.surface_color || defaultConfig.surface_color,
                set: (value) => {
                    config.surface_color = value;
                    window.elementSdk.setConfig({ surface_color: value });
                }
            },
            {
                get: () => config.text_color || defaultConfig.text_color,
                set: (value) => {
                    config.text_color = value;
                    window.elementSdk.setConfig({ text_color: value });
                }
            },
            {
                get: () => config.primary_action_color || defaultConfig.primary_action_color,
                set: (value) => {
                    config.primary_action_color = value;
                    window.elementSdk.setConfig({ primary_action_color: value });
                }
            },
            {
                get: () => config.accent_color || defaultConfig.accent_color,
                set: (value) => {
                    config.accent_color = value;
                    window.elementSdk.setConfig({ accent_color: value });
                }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
                config.font_family = value;
                window.elementSdk.setConfig({ font_family: value });
            }
        },
        fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
                config.font_size = value;
                window.elementSdk.setConfig({ font_size: value });
            }
        }
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ['name', config.name || defaultConfig.name],
        ['tagline', config.tagline || defaultConfig.tagline],
        ['intro_text', config.intro_text || defaultConfig.intro_text],
        ['about_text', config.about_text || defaultConfig.about_text],
        ['skill_1_title', config.skill_1_title || defaultConfig.skill_1_title],
        ['skill_1_desc', config.skill_1_desc || defaultConfig.skill_1_desc],
        ['skill_2_title', config.skill_2_title || defaultConfig.skill_2_title],
        ['skill_2_desc', config.skill_2_desc || defaultConfig.skill_2_desc],
        ['skill_3_title', config.skill_3_title || defaultConfig.skill_3_title],
        ['skill_3_desc', config.skill_3_desc || defaultConfig.skill_3_desc],
        ['skill_4_title', config.skill_4_title || defaultConfig.skill_4_title],
        ['skill_4_desc', config.skill_4_desc || defaultConfig.skill_4_desc],
        ['project_1_title', config.project_1_title || defaultConfig.project_1_title],
        ['project_1_desc', config.project_1_desc || defaultConfig.project_1_desc],
        ['project_2_title', config.project_2_title || defaultConfig.project_2_title],
        ['project_2_desc', config.project_2_desc || defaultConfig.project_2_desc],
        ['project_3_title', config.project_3_title || defaultConfig.project_3_title],
        ['project_3_desc', config.project_3_desc || defaultConfig.project_3_desc],
        ['project_1_tags', (config.project_tags && config.project_tags[0]) || (defaultConfig.project_tags && defaultConfig.project_tags[0])],
        ['project_2_tags', (config.project_tags && config.project_tags[1]) || (defaultConfig.project_tags && defaultConfig.project_tags[1])],
        ['project_3_tags', (config.project_tags && config.project_tags[2]) || (defaultConfig.project_tags && defaultConfig.project_tags[2])],
        ['contact_heading', config.contact_heading || defaultConfig.contact_heading],
        ['contact_text', config.contact_text || defaultConfig.contact_text],
        ['footer_text', config.footer_text || defaultConfig.footer_text]
    ]);
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}