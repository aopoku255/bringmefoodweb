// TermsAndConditions.jsx
import React from "react";
import Navbar2 from "../components/Navbar2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <section className=" ">
        <Navbar/>
        <main className="bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 ">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-white leading-relaxed">
            BringMe-Food Ltd (“BringMe-Food Ltd,” “we,” “us,” or “our”) welcomes
            you. We provide our Services to you subject to the following Terms
            and Conditions, which may be updated by us from time to time without
            notice to you. By browsing the public areas or by accessing and
            using the Services, you acknowledge that you have read, understood,
            and agree to be legally bound by the terms and conditions as well as
            our Privacy Policy, which is hereby incorporated by reference
            (collectively, this “Agreement.”). If you do not agree to any of
            these terms, then please do not use the Services.
          </p>
        </header>

        {/* If you have @tailwindcss/typography, add "prose" classes for nicer formatting */}
        <section className="space-y-10">
          {/* 1 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              1. DESCRIPTION OF SERVICES
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                BringMe-Food Ltd is a next-generation meal ordering Platform
                that utilizes the latest web, mobile, and social networking
                technologies to allow you to find and order from your favorite
                restaurants, and much more. Although you are able to place
                orders through the Services using the platform, BringMe-Food Ltd
                itself does not sell the products contained in your order, is
                not a party to any such transaction, and has no control over the
                quality or safety of the products. Your order, including an
                order placed through BringMe-Food Ltd, is between you and the
                restaurant from which you order. We do not investigate or
                verify the menus, ingredients, food preparation standards, or
                any descriptions, statements, or representations made by the
                restaurants.
              </p>
              <p>
                By using the Services, you agree that you understand that
                BringMe-Food Ltd is not responsible for any statements or
                omissions concerning the products contained in your order.
              </p>
            </div>
          </article>

          {/* 2 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              2. COMMUNITY GUIDELINES
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                BringMe-Food Ltd’s community, like any community, functions best
                when its people follow a few simple rules. By accessing and/or
                using the Services, you hereby agree to comply with these
                community rules and that:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You will not use the Services for any unlawful purpose,
                  including any fraudulent activity, or to engage in any
                  commercial activities, including, without limitation, raising
                  money; advertising or promoting a product, service, or
                  company; or engaging in any pyramid or other multi-tiered
                  marketing scheme;
                </li>
                <li>
                  You will not access or use the Services to collect any market
                  research for a competing businesses;
                </li>
                <li>
                  You will not upload, post, e-mail, transmit, or otherwise make
                  available any content that:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      infringes any copyright, trademark, or other proprietary
                      rights of any person or entity; or
                    </li>
                    <li>
                      is threatening, tortious, defamatory, libelous, indecent,
                      obscene, pornographic, invasive of another’s privacy, or
                      promotes violence; or
                    </li>
                    <li>
                      discloses any personal information about another person,
                      including that person’s name, e-mail address, postal
                      address, phone number, credit card information, or any
                      similar information;
                    </li>
                  </ul>
                </li>
                <li>
                  You will not impersonate any person or entity or falsely state
                  or otherwise misrepresent your affiliation with a person or
                  entity;
                </li>
                <li>
                  You will not use automated means, including spiders, robots,
                  crawlers, data mining tools, or the like to download or scrape
                  data from the Platform, directly or indirectly, except for
                  Internet search engines (e.g., Google) and non-commercial
                  public archives (e.g., archive.org) that comply with our
                  robots.txt file;
                </li>
                <li>
                  You will not create multiple accounts for yourself for any
                  reason, including, without limitation, in order to obtain the
                  same promotion multiple times; and
                </li>
                <li>
                  You will not interfere with or attempt to interrupt the proper
                  operation of the Services through the use of any virus,
                  device, information collection or transmission mechanism,
                  software or routine, or access or attempt to gain access to
                  any data, files, or passwords related to the Services through
                  hacking, password or data mining, or any other means.
                </li>
              </ul>

              <p>
                BringMe-Food Ltd reserve the right, in our sole and absolute
                discretion, to deny you (or any device or IP address) access to
                the Services, or any portion of the Services, without notice.
              </p>
            </div>
          </article>

          {/* 3 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              3. PAYMENT; REFUNDS
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                You pay for orders via the Services. You agree that BringMe-Food
                Ltd may immediately authorize your credit card (or other
                approved facility) for payment for any order made under your
                Password.
              </p>
              <p>
                As set forth below, you must keep your Password strictly
                confidential. You are responsible for all activities and charges
                that occur under your Password. Your liability for such charges
                shall continue after termination of this Agreement.
              </p>
              <p>
                If you have a question about a transaction on your credit card
                statement, please use the “Contact Us” section of the Website to
                contact customer service.
              </p>
              <p>
                All refunds are subject to the refund policies of the
                restaurants from which you order. If you contact us seeking a
                refund, we cannot and will not process any refund until we
                receive the approval from the applicable restaurant. We will use
                reasonable efforts to request and obtain refunds when
                appropriate.
              </p>
              <p>
                BringMe-Food Ltd is responsible for the security of cardholder
                data received from our customers, if any. To the extent that we
                store, process, or transmit cardholder data, we comply with the
                most current version of the Payment Card Industry Data Security
                Standard (PCI-DSS) and other applicable laws, rules, and
                regulations.
              </p>
            </div>
          </article>

          {/* 4 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              4. SIGN-IN NAME; PASSWORD; UNIQUE IDENTIFIERS
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                During the registration process for Registered Users, we will
                ask you to create an account, which includes a unique sign-in
                name (“Sign-In Name”), password (“Password”), and perhaps
                certain additional information that will assist in
                authenticating your identity when you log-in in the future
                (“Unique Identifiers”). When creating your account, you must
                provide true, accurate, current, and complete information. Each
                Sign-In Name and corresponding Password can be used by only one
                Registered User. You are responsible for the confidentiality and
                use of your Sign-In Name, Password, and Unique Identifiers. You
                will promptly inform us of any need to deactivate a Password or
                Sign-In Name, or change any Unique Identifier. We reserve the
                right to delete or change your Password, Sign-In Name, or Unique
                Identifier at any time and for any reason.
              </p>
            </div>
          </article>

          {/* 5 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              5. INTELLECTUAL PROPERTY
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                The Services contain material, such as software, text, graphics,
                images, sound recordings, audiovisual works, and other material
                provided by or on behalf of BringMe-Food Ltd (collectively
                referred to as the “Content”). The Content may be owned by us or
                by third parties. Unauthorized use of the Content may violate
                copyright, trademark, and other laws. You have no rights in or
                to the Content, and you will not use the Content except as
                permitted under this Agreement. No other use is permitted
                without prior written consent from us. You must retain all
                copyright and other proprietary notices contained in the
                original Content on any copy you make of the Content. You may
                not sell, transfer, assign, license, sublicense, or modify the
                Content or reproduce, display, publicly perform, make a
                derivative version of, distribute, or otherwise use the Content
                in any way for any public or commercial purpose. The use or
                posting of the Content on any other website or in a networked
                computer environment for any purpose is expressly prohibited.
              </p>

              <p>
                If you violate any part of this Agreement, your permission to
                access and/or use the Content and the Services automatically
                terminates and you must immediately destroy any copies you have
                made of the Content.
              </p>

              <p>
                The trademarks, service marks, and logos of BringMe-Food Ltd
                (“BringMe-Food Ltd Trademarks”) used and displayed on the
                Services are registered and unregistered trademarks or service
                marks of BringMe-Food Ltd. Elements of the Services are
                protected by trade dress, trademark, unfair competition, and
                other state and federal laws and may not be copied or imitated
                in whole or in part, by any means, including but not limited to
                the use of framing or mirrors. None of the Content may be
                retransmitted without our express, written consent for each and
                every instance.
              </p>
            </div>
          </article>

          {/* 6 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              6. COMMUNICATIONS TO BRINGME-FOOD LTD AND USER SUBMISSIONS
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                Although we encourage you to e-mail us, we do not want you to,
                and you should not, e-mail us any content that contains
                confidential information. With respect to all e-mails you send
                to us, including but not limited to, feedback, questions,
                comments, suggestions, and the like, we shall be free to use any
                ideas, concepts, know-how, or techniques contained in your
                communications for any purpose whatsoever, including but not
                limited to, the development, production, and marketing of
                products and services that incorporate such information.
              </p>

              <p>
                You retain all copyrights and other intellectual property rights
                in and to anything you post to the Services. You do, however,
                grant us an irrevocable, non-exclusive, worldwide, perpetual,
                royalty-free license to use, modify, copy, distribute, publish,
                perform, sublicense, and create derivative works from all
                submissions you provide to us in any media now known or
                hereafter devised and for any purpose.
              </p>
            </div>
          </article>

          {/* 7 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              7. NO WARRANTIES/LIMITATION OF LIABILITY
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p className="font-semibold uppercase text-white">
                THE CONTENT AND THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS
                AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM
                ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE WARRANTY OF
                TITLE, MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES’
                RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND ANY WARRANTIES
                ARISING FROM A COURSE OF DEALING, COURSE OF PERFORMANCE, OR
                USAGE OF TRADE.
              </p>

              <p className="font-semibold uppercase text-white">
                IN CONNECTION WITH ANY WARRANTY, CONTRACT, OR COMMON LAW TORT
                CLAIMS: (I) WE SHALL NOT BE LIABLE FOR ANY INCIDENTAL OR
                CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM
                LOST DATA OR BUSINESS INTERRUPTION RESULTING FROM THE USE OR
                INABILITY TO ACCESS AND USE THE SERVICES OR THE CONTENT, EVEN IF
                WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; AND
                (II) ANY DIRECT DAMAGES NOT ATTRIBUTABLE TO PERSONAL INJURIES
                THAT YOU MAY SUFFER AS A RESULT OF YOUR USE OF THE SERVICES OR
                THE CONTENT SHALL BE LIMITED TO THE MONIES YOU HAVE PAID US IN
                CONNECTION WITH YOUR USE OF THE SERVICES DURING THE THREE (3)
                MONTHS IMMEDIATELY PRECEDING THE EVENTS GIVING RISE TO THE CLAIM.
              </p>

              <p className="font-semibold uppercase text-white">
                THE SERVICES AND/OR THE CONTENT MAY CONTAIN TECHNICAL
                INACCURACIES, TYPOGRAPHICAL ERRORS, OR OMISSIONS, INCLUDING WITH
                RESPECT TO ALLERGY INFORMATION AND/OR FOOD PREPARATION
                STANDARDS. WE ARE NOT RESPONSIBLE FOR ANY SUCH TYPOGRAPHICAL,
                TECHNICAL, PRICING, OR OTHER ERRORS LISTED ON OR OMITTED FROM
                THE SERVICES AND/OR THE CONTENT. THE SERVICES AND THE CONTENT
                CONTAIN INFORMATION ON OUR PARTICIPATING RESTAURANTS’, NOT ALL
                OF WHICH ARE AVAILABLE IN EVERY LOCATION. A REFERENCE TO A
                PRODUCT ON THE SERVICES OR IN THE CONTENT DOES NOT IMPLY THAT
                SUCH PRODUCT IS OR WILL BE AVAILABLE IN YOUR LOCATION. WE
                RESERVE THE RIGHT TO MAKE CHANGES, CORRECTIONS, AND/OR
                IMPROVEMENTS TO THE SERVICES AND THE CONTENT AT ANY TIME WITHOUT
                NOTICE.
              </p>

              <p className="font-semibold uppercase text-white">
                WE RESERVE THE RIGHT TO CANCEL OR MODIFY AN ORDER WHERE IT
                APPEARS THAT A CUSTOMER HAS ENGAGED IN FRAUDULENT OR
                INAPPROPRIATE ACTIVITY OR UNDER OTHER CIRCUMSTANCES WHERE IT
                APPEARS THAT THE ORDER CONTAINS OR RESULTED FROM A MISTAKE OR
                ERROR. IN ADDITION, WE RESERVE THE RIGHT TO REPORT ANY
                FRAUDULENT OR INAPPROPRIATE CONDUCT TO APPROPRIATE AUTHORITIES
                AT OUR DISCRETION.
              </p>
            </div>
          </article>

          {/* 8 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              8. EXTERNAL SITES
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                The Services may contain links to third-party websites
                (“External Sites”). These links are provided solely as a
                convenience to you and not as an endorsement by us of the
                content on such External Sites. The content of such External
                Sites is developed and provided by others. You should contact
                the site administrator or webmaster for those External Sites if
                you have any concerns regarding such links or any content
                located on such External Sites. We are not responsible for the
                content of any linked External Sites and do not make any
                representations regarding the content or accuracy of materials
                on such External Sites. You should take precautions when
                downloading files from all websites to protect your computer
                from viruses and other destructive programs. If you decide to
                access linked External Sites, you do so at your own risk.
              </p>
            </div>
          </article>

          {/* 9 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              9. INDEMNIFICATION
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                You agree to defend, indemnify, and hold us and our officers,
                directors, employees, successors, licensees, and assigns
                harmless from and against any claims, actions, or demands,
                including, without limitation, reasonable legal and accounting
                fees, arising or resulting from your breach of this Agreement or
                your misuse of the Content or the Services. We shall provide
                notice to you of any such claim, suit, or proceeding and shall
                assist you, at your expense, in defending any such claim, suit,
                or proceeding. We reserve the right to assume the exclusive
                defense and control of any matter that is subject to
                indemnification under this section. In such case, you agree to
                cooperate with any reasonable requests assisting our defense of
                such matter.
              </p>
            </div>
          </article>

          {/* 10 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              10. TERMINATION OF THE AGREEMENT
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                BringMe-Food Ltd reserves the right, in our sole discretion, to
                restrict, suspend, or terminate this Agreement and your and any
                device’s access to all or any part of the Services, at any time
                and for any reason without prior notice or liability.
                BringMe-Food Ltd reserves the right to change, suspend, or
                discontinue all or any part of the Services at any time without
                prior notice or liability.
              </p>
            </div>
          </article>

          {/* 11 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              11. CLASS ACTION WAIVER
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                You agree that any arbitration or proceeding shall be limited to
                the Dispute between us and you individually. To the full extent
                permitted by law, (i) no arbitration or proceeding shall be
                joined with any other; (ii) there is no right or authority for
                any Dispute to be arbitrated or resolved on a class action-basis
                or to utilize class action procedures; and (iii) there is no
                right or authority for any Dispute to be brought in a purported
                representative capacity on behalf of the general public or any
                other persons. YOU AGREE THAT YOU MAY BRING CLAIMS AGAINST US
                ONLY IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS
                MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
              </p>
            </div>
          </article>

          {/* 12 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              12. ENTIRE AGREEMENT
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                This Agreement contains the entire agreement and understanding
                among the parties hereto with respect to the subject matter
                hereof, and supersedes all prior and contemporaneous agreements,
                understandings, inducements and conditions, express or implied,
                oral or written, of any nature whatsoever with respect to the
                subject matter hereof. The express terms hereof control and
                supersede any course of performance and/or usage of the trade
                inconsistent with any of the terms hereof.
              </p>
            </div>
          </article>

          {/* 13 */}
          <article>
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              13. GOVERNING LAW
            </h2>
            <div className="mt-3 space-y-4 text-white leading-relaxed">
              <p>
                This Terms and Conditions shall be construed in accordance with
                the laws Ghana, without reference to its conflict of law
                provisions, and the obligations, rights and remedies of the
                parties hereunder shall be determined in accordance with such
                laws.
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
    <Footer/>
    </section>
  );
};

export default TermsAndConditions;
