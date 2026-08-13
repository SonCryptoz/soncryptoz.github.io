import React, { useState } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-awesome-reveal";

export default function GithubRepoCard({ repo, theme, index = 0 }) {
    const length = repo.images ? repo.images.length : 0;
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = (e) => {
        e.stopPropagation();
        if (length > 0 && !isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => prev + 1);
        }
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        if (length > 0 && !isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => prev - 1);
        }
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentSlide === 0) {
            setCurrentSlide(length);
        } else if (currentSlide === length + 1) {
            setCurrentSlide(1);
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    function openRepoinNewTab(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }

    const localImages = import.meta.glob('../../assets/images/*.{png,jpg,jpeg,svg,gif}', { eager: true, import: 'default' });
    const rawSlides = length > 0 ? [repo.images[length - 1], ...repo.images, repo.images[0]] : [];
    const slides = rawSlides.map(url => localImages[url] || url);

    return (
        <Fade direction={index % 2 === 0 ? "left" : "right"} triggerOnce duration={2000}>
            <div className="repo-card-div" style={{ backgroundColor: theme.body }}>
                <div key={repo.id} className="repo-card-inner">
                    {/* Slider Section */}
                    {length > 0 && (
                        <div className="repo-slider-container">
                            <button
                                className="slider-btn prev-btn"
                                onClick={prevSlide}
                            >
                                <span
                                    className="iconify"
                                    data-icon="mdi:chevron-left"
                                ></span>
                            </button>

                            <div className="slider-images-wrapper">
                                <div
                                    className="slider-images-track"
                                    style={{
                                        transform: `translateX(-${
                                            currentSlide * 100
                                        }%)`,
                                        transition: isTransitioning
                                            ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
                                            : "none",
                                    }}
                                    onTransitionEnd={handleTransitionEnd}
                                >
                                    {slides.map((imgUrl, index) => (
                                        <div key={index} className="slide-item">
                                            <img
                                                src={imgUrl}
                                                alt={`${repo.name} slide`}
                                                className="repo-image"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="slider-btn next-btn"
                                onClick={nextSlide}
                            >
                                <span
                                    className="iconify"
                                    data-icon="mdi:chevron-right"
                                ></span>
                            </button>

                            <div className="repo-action-links">
                                {repo.repo && (
                                    <button
                                        className="action-btn repo-btn"
                                        onClick={() =>
                                            openRepoinNewTab(repo.repo)
                                        }
                                    >
                                        <span
                                            className="iconify"
                                            data-icon="mdi:github"
                                        ></span>{" "}
                                        Code
                                    </button>
                                )}
                                {repo.url && repo.url !== repo.repo && (
                                    <button
                                        className="action-btn site-btn"
                                        onClick={() =>
                                            openRepoinNewTab(repo.url)
                                        }
                                    >
                                        <span
                                            className="iconify"
                                            data-icon="mdi:open-in-new"
                                        ></span>{" "}
                                        Demo
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Content Section (Split Layout) */}
                    <div className="repo-content-split">
                        <div className="repo-content-left">
                            <h2
                                className="repo-name"
                                style={{ color: theme.highlight }}
                            >
                                {repo.name}
                            </h2>
                            <ProjectLanguages
                                className="repo-languages"
                                logos={repo.languages}
                            />
                            <p
                                className="repo-creation-date subTitle"
                                style={{ color: theme.secondaryText }}
                            >
                                {formatDate(repo.createdAt)}
                            </p>
                        </div>
                        <div className="repo-content-right">
                            <p
                                className="repo-description"
                                style={{ color: theme.secondaryText }}
                            >
                                {repo.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
