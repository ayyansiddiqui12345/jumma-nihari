import {
    MapPin,
    Phone,
    MessageCircle,
    ArrowUpRight,
    Clock,
} from "lucide-react";

function Location() {
    return (
        <section className="location-section" id="location">

            <div className="location-container">

                {/* LEFT CONTENT */}
                <div className="location-content">

                    <div className="location-label">
                        <span></span>
                        FIND US
                    </div>

                    <h2>
                        Come Taste
                        <span>The Tradition.</span>
                    </h2>

                    <p className="location-description">
                        Visit Jumma Gujjar Nihari & Pakwan and experience
                        the rich, authentic flavors of Karachi.
                    </p>


                    {/* ADDRESS */}
                    <div className="location-detail">

                        <div className="location-icon">
                            <MapPin size={20} />
                        </div>

                        <div>
                            <small>OUR LOCATION</small>

                            <p>
                                liaquatabad B Area, Karachi, Pakistan.
                            </p>
                        </div>

                    </div>


                    {/* HOURS */}
                    <div className="location-detail">

                        <div className="location-icon">
                            <Clock size={20} />
                        </div>

                        <div>
                            <small>OPENING HOURS</small>

                            <p>
                                Monday — Sunday
                                <br />
                                12:00 PM — 2:00 AM
                            </p>
                        </div>

                    </div>


                    {/* CONTACT BUTTONS */}
                    <div className="location-actions">

                        <a
                            href="tel:+923168937463"
                            className="location-button"
                        >
                            <Phone size={17} />
                            Call Us
                        </a>

                        <a
                            href="https://wa.me/923168937463"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-button whatsapp-button"
                        >
                            <MessageCircle size={17} />
                            WhatsApp
                        </a>

                    </div>

                </div>


                {/* RIGHT MAP */}
                <div className="location-map">

                    <div className="map-overlay">

                        <div className="map-pin">
                            <MapPin size={24} />
                        </div>

                        <div className="map-info">
                            <strong>JUMMA GUJJAR</strong>
                            <span>NIHARI & PAKWAN</span>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/tX1QoH76pEKLSwPN7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-button"
                        >
                            Open in Google Maps
                            <ArrowUpRight size={16} />
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Location;