import React from 'react';
import '../App.css';
import './HomeSection.scss';


function HomeSection() {


    return (
        <div className='full-screen-container'>
            <div className='OP-header'>
                Terms of Use and Privacy Policy
            </div>
            <div className='OP-text'>
                <h3>Terms of Use:</h3>
                <ol>
                    <li><strong>Use of the Website:</strong> By accessing and using this website, you agree to abide by these Terms of Use. You are prohibited from engaging in any activity that disrupts or interferes with the proper functioning of the website.</li>
                    <li><strong>Prohibited Activities:</strong> Users are strictly prohibited from attempting to brute force, DDOS, hack, or otherwise exploit the website's security measures. Additionally, any action that violates the intellectual property rights outlined in the websites <a href="https://mediainformation-ca3b9.web.app/" target='blank'>mediainformation-ca3b9.web.app</a> or <a href="https://opensource-7d53e.web.app/" target='blank'>opensource-7d53e.web.app</a> is prohibited.</li>
                    <li><strong>Limitation of Liability:</strong> The website owner shall not be held liable for any damages arising out of the use or inability to use the website, including but not limited to direct, indirect, incidental, or consequential damages.</li>
                    <li><strong>Changes to Terms:</strong> The website owner reserves the right to modify or update these Terms of Use at any time without prior notice. It is the responsibility of the user to review these terms regularly.</li>
                </ol>

                <h3>Privacy Policy:</h3>
                <ol>
                    <li><strong>Collection of Data:</strong> This website does not collect any personal user data. Any data utilized by the website is stored locally on the user's device as browser cookies or local storage, and the website owner does not have access to this data.</li>
                    <li><strong>Firebase Analytics:</strong> This website uses Google Firebase Analytics to collect anonymous statistical information about user interactions with the website. This data is used solely for the purpose of analyzing website usage trends and improving the user experience. Firebase Analytics does not collect any personally identifiable information about users, such as names or locations.</li>
                    <li><strong>Third-Party Links:</strong> This website may contain links to third-party websites. Users are encouraged to review the privacy policies of these websites, as the website owner is not responsible for the privacy practices or content of third-party sites.</li>
                    <li><strong>Data Security:</strong> While reasonable measures are taken to protect user data, no method of transmission over the internet or electronic storage is 100% secure. Users acknowledge and accept the inherent risks of transmitting data online.</li>
                </ol>
            </div>
        </div>
    )
}

export default HomeSection