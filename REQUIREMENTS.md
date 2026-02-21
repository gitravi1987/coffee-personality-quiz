# Coffee Personality Quiz - Requirements

## Personality → Coffee Pairings

1. **Bold Adventurer** → Double Espresso
   *"You live for intensity"*

2. **Social Butterfly** → Cappuccino
   *"Coffee is better with company"*

3. **Health Nut** → Oat Milk Americano
   *"Wellness in every sip"*

4. **Indulgent Treat** → Mocha with Whip
   *"Coffee is dessert"*

## Result Display Logic

**Single Recommendation**
Show the personality type that appears most frequently in the user's answers, along with the corresponding coffee recommendation.

Example: "You're a Bold Adventurer! Your coffee: Double Espresso"

## Visual Style

**Style 4: Warm & Cozy**
- Earth tones (peachy/brown gradient backgrounds)
- Soft gradients
- Inviting, comfortable feel
- Georgia serif font
- Rounded corners
- Soft shadows
- Warm color palette (#ffecd2 to #fcb69f gradient)
- Card background: #fff8f0 (off-white/cream)

## Visual Elements

- **Images:** Skip for now (can add later)
- **Icons:** YES - include emoji icons next to each answer option

## Quiz Questions

### Question 1: What's your ideal Saturday morning?
- 🥾 Hit the trail for a sunrise hike → **Bold Adventurer**
- ☕ Brunch with friends at the new spot everyone's talking about → **Social Butterfly**
- 🧘 Yoga class followed by a green smoothie → **Health Nut**
- 🥞 Sleep in, then treat yourself to pancakes and Netflix → **Indulgent Treat**

### Question 2: Pick a Netflix show to binge:
- 🏔️ Survival documentaries or extreme sports → **Bold Adventurer**
- 💬 Friends, The Office, or any comedy with a great ensemble cast → **Social Butterfly**
- 🌱 Chef's Table or wellness documentaries → **Health Nut**
- 🍰 The Great British Bake Off or cozy comfort shows → **Indulgent Treat**

### Question 3: You have a free afternoon. What sounds best?
- 🚴 Try that new bike trail everyone's been raving about → **Bold Adventurer**
- 🎉 Catch up with friends over coffee → **Social Butterfly**
- 🥗 Meal prep for the week ahead → **Health Nut**
- 📚 Curl up with a good book and some chocolate → **Indulgent Treat**

### Question 4: If you were a color, you'd be:
- 🔴 Bold red - intense and energizing → **Bold Adventurer**
- 💛 Warm yellow - bright and social → **Social Butterfly**
- 💚 Fresh green - clean and balanced → **Health Nut**
- 💜 Rich purple - luxurious and indulgent → **Indulgent Treat**

### Question 5: What's most important in your coffee?
- 💥 Bold, intense flavor that wakes me up → **Bold Adventurer**
- 🗣️ Something I can share and talk about with others → **Social Butterfly**
- ✨ Clean ingredients and functional benefits → **Health Nut**
- 🍫 Rich, sweet, and absolutely delicious → **Indulgent Treat**

### Question 6: Your dream vacation:
- ⛰️ Adventure travel - hiking, climbing, exploring → **Bold Adventurer**
- 🏖️ Group trip with friends to somewhere fun → **Social Butterfly**
- 🧘‍♀️ Wellness retreat focused on self-care → **Health Nut**
- 🏰 Luxury resort where everything is taken care of → **Indulgent Treat**

### Question 7: Coffee or tea?
- ☕ Coffee all the way - bold and energizing → **Bold Adventurer**
- 🫖 Tea person - I love the ritual and variety → **Health Nut**
- 🥤 I love both - depends on my mood and who I'm with → **Social Butterfly**
- 🍫 Hot chocolate, actually - give me something sweet! → **Indulgent Treat**

## Technical Notes

- Framework: Next.js
- Language: JavaScript/TypeScript
- Styling: Custom CSS matching Style 4 warm & cozy aesthetic
- Quiz flow: Intro screen → Questions (one at a time) → Result screen
- Calculation: Count personality occurrences, display the winner
