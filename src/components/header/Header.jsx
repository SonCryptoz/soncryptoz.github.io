import { Component } from "react";
import "./Header.css";
import { greeting } from "../../portfolio";
import SeoHeader from "../seoHeader/SeoHeader";
import { chosenTheme } from "../../theme";

class Header extends Component {
    constructor(props) {
        super(props);
        this.menuBtnRef = null;
        this.state = { activeSection: "home" };
        this.sectionIds = [
            "home",
            "education",
            "experience",
            "projects",
            "contact",
        ];
    }

    componentDidMount() {
        this.updateActiveSection();
        window.addEventListener("scroll", this.updateActiveSection, {
            passive: true,
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.updateActiveSection);
        if (this.scrollFrame) cancelAnimationFrame(this.scrollFrame);
    }

    updateActiveSection = () => {
        if (this.scrollFrame) return;

        this.scrollFrame = requestAnimationFrame(() => {
            const scrollLine = window.innerHeight * 0.35;
            const sections = this.sectionIds
                .map((id) => document.getElementById(id))
                .filter(Boolean);
            const current = sections.reduce(
                (active, section) =>
                    section.getBoundingClientRect().top <= scrollLine
                        ? section.id
                        : active,
                "home",
            );

            this.scrollFrame = null;
            if (current !== this.state.activeSection)
                this.setState({ activeSection: current });
        });
    };

    closeMenu = () => {
        if (this.menuBtnRef) this.menuBtnRef.checked = false;
    };

    render() {
        const { theme } = this.props;
        const navItems = [
            { id: "home", label: "Home" },
            { id: "education", label: "Education" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
        ];

        return (
            <>
                <SeoHeader />
                <header className="header" style={{ backgroundColor: chosenTheme.body}}>
                    <a href="#home" className="logo" onClick={this.closeMenu}>
                        <span
                            className="logo-name"
                            style={{ color: theme.secondaryText }}
                        >
                            &lt;{greeting.logo_name}/&gt;
                        </span>
                    </a>

                    <input
                        className="menu-btn"
                        type="checkbox"
                        id="menu-btn"
                        ref={(el) => {
                            this.menuBtnRef = el;
                        }}
                    />
                    <label
                        className="menu-icon"
                        htmlFor="menu-btn"
                        aria-label="Toggle menu"
                    >
                        <span className="navicon" />
                    </label>
                    <div
                        className="menu-overlay"
                        onClick={this.closeMenu}
                        aria-label="Close menu"
                    />

                    <ul
                        className="menu"
                        style={{ backgroundColor: theme.body }}
                    >
                        {navItems.map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={
                                        this.state.activeSection === id
                                            ? "menu-link--active"
                                            : "menu-link"
                                    }
                                    style={{ color: theme.secondaryText }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({ activeSection: id });
                                        window.history.pushState(null, null, `#${id}`);
                                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                        this.closeMenu();
                                    }}
                                >
                                    <span className="nav-label">{label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="header-email-container">
                        <a href="mailto:xorscript182@gmail.com" className="header-email" style={{ color: theme.secondaryText }}>
                            xorscript182@gmail.com
                        </a>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
