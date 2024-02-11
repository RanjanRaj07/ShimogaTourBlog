function getCurrentSlideIndex (){
  var activeSlideIndex = swiper.activeIndex;
  var data = document.getElementById('data-body')
  switch(activeSlideIndex){
    case 0:
      data.innerHTML = '<div class="data-class" data-aos="fade-up"><h2>Sri Sigandur Chowdeshwari Temple</h2><p>the temple has a rich heritage and history of the godess sri chowdeshwari. Shree Devi kshethra was built in the 18th century. Sigandur kshethra is near Thumari, 42 km from Sagar town.<br>The village is surrounded on three sides by the backwaters of Linganamakki dam, formed by the Sharavathi River.Sigandur is about 40 km from its taluk headquarters, Sagara town. The Launcher ride adds to your experience as it provides a scenic view of the backwaters and forest around it.</p></div>'
      break
    case 1:
      data.innerHTML = '<div class="data-class" data-aos="fade-up"><h2>Mahanandi Gouloka</h2><p>a unique cow centre where one can gain a comprehensive portrait of Goumatha, the Universal Mother and also procure complete information on the essence of Bos indicus, the Indian Breed of Cow.One goushala, where you can see all breeds at a single place. 33 Indian breed Desi cows from all over India are protected here.<br>The gousahala is a part of <strong>sri ramachandrapura mutta</strong> located at Billodi - Karanagiri road, Hosanagar, Karnataka 577418</p></div>'
      break
    case 2:
      data.innerHTML = '<div class="data-class" data-aos="fade-up"><h2>Aghoreshwara Temple - Ikkeri</h2><p>The temple is a large structure, built of granite, in a uniquely mixed style that incorporates elements from Vijayanagara architecture, the Karnataka Dravida style of the Later Chalukya dynasty and Hoysala Empire.There are three shrines, the biggest dedicated to Aghoresvara (Shiva), a Parvati shrine to its left and a Nandi in the front.<br>Ikkeri is a hamlet situated in Sagara taluk (township) about 6 km to the south of the town centre in Sagara.</p></div>'
      break
    case 3:
      data.innerHTML = '<div class="data-class" data-aos="fade-up"><h2>Sri kshethra Sridharashrama - Varadapura</h2><p>The Shrine is a place where Saint Shri Shridhara Swami also referred to as "Bhagwan Sadguru Shri Shridhar Swami Maharaj" who lived here and spent the last few years of his life preaching the Dharma and some of his principles to his disciples and led the foundation for this Shrine. This Shrine consists of Samadhi, Gynan Mandir, Dharma Sthamba, Goshala, and Shridhar Teertha. Vardhapura also known as Varadahalli is a small village surrounded by picturesque locations, near Sagara City, Karnataka.</p></div>'
      break
    case 4:
      data.innerHTML = '<div class="data-class" data-aos="fade-up"><h2>Rameshwara Temple - Keladi</h2><p>The quaint temple town of Keladi is located about 8 km away from the town of Sagar in the Shimoga district of Karnataka. <br>It is known for the famous Rameshwara Temple, Keladi was once the capital of the Keladi rulers (or Nayakas), a feudatory of Vijayanagara Empire. Constructed in the Hoysala-Dravida style, the temple is magnificent with a number of unique features. The temple built by the ruler Chowdappa Nayaka has three main shrines, namely that of Rameshwara, Parvati and Veerabhadra. </p></div>'
      break
    case 5:
      data.innerHTML = '<div class="data-class" data-aos="fade-up"><h2>Keladi Museum</h2><p>The Keladi Museum is the only rural museum of manuscripts, sculptures and paintings which has a research centre and publication wing. The Keladi Museum is an effort to encapsulate the wide history of the region for posterity. Keladi Museum is a rich storehouse of copper inscriptions, palm leaves, coins and many more interesting antiques of the Keladi period. <br>Keladi is now a small village, 6 Km from Taluk Head quarters Sagar in Shimoga District.</p></div>'
      break
    case 6:
      data.innerHTML = '<div class="data-class" data-aos="fade-up"><h2>The Jog falls</h2><p>Jog Falls is a waterfall on the Sharavati river located in Siddapura taluk, Uttara Kannada District and it\'s view point located in Shimoga district of Karnataka, India. It is the second highest plunge waterfall in India.<br>Jog falls is popular for its plunge from a height of 830 feet as four beautiful cascades, Raja, Rani, Roarer and Rocket.  It is a segmented waterfall which depends on rain and season to become a plunge waterfall.</p></div>'
      break
    case 7:
      data.innerHTML = '<div class="data-class" data-aos="fade-up"><h2>Museum Malgudi</h2><p>Malgudi Days the famed TV serial based on RK Narayan\'s book of the same title was filmed in these environs. The Malgudi Days serials became famous for the stories of a young boy swami and his interesting incidents. The director and mastermind of the show was the legend of the Kannada film industry Mr.Shankar Nag.<br>Arasalu hosted the railway scenes that appeared in various episodes. Arasalu railway station or Museum Malgudi is about 32 km from Shivamogga City. You have to turn left at Ayanur (about 16 km) while heading towards Sagara on BH Road.</p></div>'
      break
  }
}


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide : 0,
    on: {
      init: function() {
        console.log('Swiper initialized')
      },
      slideChange: function() {
        getCurrentSlideIndex()
      }
    }
  });

