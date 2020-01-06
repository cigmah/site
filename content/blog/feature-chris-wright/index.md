+++
title = "Feature: A/Prof Chris Wright"
date = "2019-07-29"
author = "moderator"
tags = ["feature"]
+++

> *Associate Professor Chris Wright is the Academic Director of Clinical Programs for Monash University&rsquo;s medical course. A/Prof Wright has a wealth of experience as an intensive care physician, programmer, and educator. We were very fortunate to have the chance to ask A/Prof Wright about his experiences in both medicine and programming.*



# How did you first begin programming?

The first time I learnt to code was at school in 1971. There was a language
called [MINITRAN](https://stackoverflow.com/questions/36328095/how-do-you-find-sine-cosine-etc-in-minitran) which was a subset of [Fortran](https://en.wikipedia.org/wiki/Fortran). You&rsquo;d code it with [punch cards](https://en.wikipedia.org/wiki/Punched_card)
which had little squares that you could push out with a paperclip. You first had
to punch out all the commands and numbers, then you submitted it, and two weeks
later you&rsquo;d get a printout which either had one line that said e.g. &ldquo;Syntax
error at line 8&rdquo;, or it ran your code. That was my first exposure to coding.


# Tell us about your experiences with programming.


## In University

When I was in university, I was somehow able to get an account on the computer -
so in 1975, I had an account at Melbourne University on the [RSTS/E](https://en.wikipedia.org/wiki/RSTS/E) runtime
system. The internet was basically a cable that came through the wall back
then - it was before the web, but we did have email. I used that computer to
program things like [Conway&rsquo;s Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) in [RSTS Basic](https://en.wikipedia.org/wiki/RSTS/E#BASIC-PLUS). At first we just had
printouts, so you&rsquo;d be coding at a [Teletype](https://en.wikipedia.org/wiki/Teleprinter) - a typewriter - and when you ran
your code, it would print out one line and your pattern would come out, then it
would think, and the next pattern would come out.

Then we got terminals, and that was a big deal. And the editor I used there
was [ed](https://en.wikipedia.org/wiki/Ed_(text_editor)), which was pre-[vi](https://en.wikipedia.org/wiki/Vi), and you got quite good at remembering how many lines
you had to jump down and delete.

With that, I coded a subset of [Guyton&rsquo;s circulatory physiology model](https://models.cellml.org/exposure/e1f152d0dbd1dec4111faa117db85bc0/guyton_circulatory_dynamics_2008.cellml/view), and that&rsquo;s
where I started to get really interested in what mathematical modelling might
have to do with medicine. Guyton&rsquo;s model allows you to make simple changes to
the circulation, yet have quite complex insights. It&rsquo;s a good example of a
[spherical cow](https://en.wikipedia.org/wiki/Spherical_cow), where you&rsquo;re ignoring all the ephemera and just concentrating on
the core issues.

But if I put this model in front of a group of final-year medical students or
even intensive care registrars, I can ask questions of this model which they
can&rsquo;t answer. There&rsquo;s no pulsatility in the heart in the model and it&rsquo;s got no
lungs - and you might think &ldquo;How is that relevant? How can that possibly be
helpful?&rdquo; It turns out, if you model the *right* elements of a system, you can
gain deep insights into the system. It showed me that a complicated model isn&rsquo;t
always the best model. So that was very interesting, and I just solved it with
Eulerian integration.


## Career

Then I finished medicine after a couple of years, and thought about going into
computer science for good because there was a bit of a push for it in Melbourne
at the time. But I decided to keep going. I bought an [Osborne 1](https://en.wikipedia.org/wiki/Osborne_1) - that was my
first computer - and programmed mostly in [assembly language](https://en.wikipedia.org/wiki/Assembly_language) and [Forth](https://en.wikipedia.org/wiki/Forth_(programming_language)). And Forth
is a *beautiful* language, and should have been around longer. Around that time,
there was also a book called [Godel, Escher, Bach](https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach) by Douglas Hofstadter, which
used [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) as its language in parts, and that got me interested in Lisps.

I went through a succession of computers, including Osbornes and Apples and
[Kaypros](https://en.wikipedia.org/wiki/Kaypro). Then in 1984 I had a 110-volt Mac - one of the first in the country -
which you&rsquo;d program with [Apple Pascal](https://en.wikipedia.org/wiki/Apple_Pascal).

Soon after, I finished my nephrology training. I did some study at RMIT in
artificial intelligence, then went to intensive care medicine. And in my
intensive care work, I worked for 25 years with an intensive care specialist
named Geoff Parkin.

Geoff is one of the most innovative and brilliant physiologists I&rsquo;ve
ever met, and he and I spent 25 years doing a whole lot of computer
work in intensive care. Much of this work was based around open-loop
and closed-loop control of the circulatory and respiratory systems -
taking information out of the monitors, processing it, then providing
therapy directly with or without a human involved. We also did a fair amount 
of simulation work. Windows wasn&rsquo;t my favourite world, but Windows had [COM
objects](https://en.wikipedia.org/wiki/Component_Object_Model) back then, and the COM objects provided quite good interfaces
to serial devices and analog devices so you didn&rsquo;t have to do the
lower-level driver writing.

I was also involved in the [Health Informatics Society of Australia](https://www.hisa.org.au/). In fact,
last year the 5 or 6 of us who were around at the start were made life members.
That was nice.


# What are your thoughts and experiences on how programming applies to medicine?

Here&rsquo;s an example - there was a program called [MYCIN](https://en.wikipedia.org/wiki/Mycin) which came out of Stanford. It
was a rules-based expert system for infectious diseases. And in the 80&rsquo;s, they
published a [paper](https://jamanetwork.com/journals/jama/article-abstract/366606) showing that its advice was about as good as ID consultants.

So the question we have to ask is why aren&rsquo;t we all using it? At least 30 years
ago we *knew* how well computers could do this, so what happened? We&rsquo;re starting
to use computer systems to help us now and [antimicrobial stewardship](https://en.wikipedia.org/wiki/Antimicrobial_stewardship) is a big
deal, but we&rsquo;ve known we could use computers to help for about 30 years. I think
this really highlights that the cultural context in which we put technology is
important, and you can&rsquo;t win with good technology alone. You&rsquo;ve got to take
people with you.

People went off AI back then - it was the &ldquo;[AI winter&ldquo;](https://en.wikipedia.org/wiki/AI_winter), AI had overpromised
and underdelivered - but as soon as the commercial imperative became
obvious, AI got a role again. And people started getting interested in how we
might use knowledge to improve care or at least save money. Since then
there&rsquo;s been a real growth in statistical AI and machine learning. And we&rsquo;re
starting to see AI having a real effect on healthcare now. It&rsquo;s
starting to become an okay thing to talk about.

But I think one of the risks is that when people say AI in medicine, they&rsquo;re
talking about neural networks and machine learning - but there&rsquo;s a whole *world*
of [symbolic reasoning](https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence). Its got its limitations, but so has machine learning. I
think some hybridisation of both these models will turn out to be good.

And there&rsquo;s also all these other areas - like [HL-7](https://en.wikipedia.org/wiki/Health_Level_7) - which are less &ldquo;sexy&rdquo;, but
a requirement for good healthcare systems. The idea behind systems like HL-7 is
so &ldquo;Device A&rdquo; can talk to &ldquo;Device B&rdquo; through a shared taxonomy. It&rsquo;s a very
important idea - people need to work on it - but most people get hung up on
things like [AlphaGo](https://en.wikipedia.org/wiki/AlphaGo).


# What interests you about programming?

I think it started with Guyton&rsquo;s model. I&rsquo;ve always liked maths - and
here was a real chance to do experimental mathematics. Writing some
maths and seeing it run was very appealing and quite engaging; you
could increase the systemic vascular resistance and watch the blood
pressure go up! I thought that if I can make a computer model of a
problem run, then to some extent I understand the problem. That was
the key for me.

I also like solving puzzles, which often involve finding how to represent things
parsimoniously. And there&rsquo;s the joy of representing something about the world in
a format which is executable. What you&rsquo;ve done is made something explicit so
other people can share your mindset.

And it turns out I like programming languages. I was involved in Python back in
the early days and went to an early Python conference in San Diego. Python
struck me as a very interesting language early on, and we wrote a lot of the
ICU code in Python as well. [Mark Hammond](http://pyfound.blogspot.com/2015/06/mark-hammond-receives-distinguished.html) wrote a fantastic interface to the
COM world so you could use Python to call COM objects back in the day.

I think I also enjoy the intellectual insights that very clever people have had,
and wonder why we just sort of hack away at JavaScript. For example, Bill
Atkinson wrote [HyperCard](https://en.wikipedia.org/wiki/HyperCard) - which I think is the greatest computer system ever
written. All those lessons have been lost, and that makes me a bit sad.


# What is your advice for students interested in programming and medicine?

My advice for this group of people - and they&rsquo;re very important people because
they&rsquo;ll make a big contribution - is if they&rsquo;re going to do computer science,
they shouldn&rsquo;t do information procesing. They need to not come out at as
JavaScript or Java hackers. They need to do either electrical engineering - in
which case they&rsquo;ll learn [Matlab](https://www.mathworks.com/products/matlab.html), assembly, chips, and will make a huge
contribution to learning to make better and new devices - or they need to do
computer science in the [SICP](https://mitpress.mit.edu/sites/default/files/sicp/index.html) sense - not in a business information sense. So
they shouldn&rsquo;t be taught how to use a language by a course where you&rsquo;ll come out
knowing how to program in Java. That&rsquo;s not what&rsquo;s important for innovation.

I think there&rsquo;s great merit to learning the stuff that was known in
the &ldquo;old days&rdquo;. I&rsquo;m a big fan of [Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay) - Alan Kay worked at [Xerox
PARC](https://en.wikipedia.org/wiki/PARC_(company)), where they invented [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming),
laser printers and the ethernet. Smalltalk came out of PARC.

Alan has a set of fantastic YouTube videos where he talks about
software engineering not being engineering yet. He says software
engineering is a bit like engineering before we discovered the
arch. What we did with the pyramids was pile bricks on top of one
another - but once we discovered the arch, it became a principle that
allowed us to build efficiently and reliably.

He&rsquo;s also highly critical of what he calls &ldquo;pop culture computer science&rdquo; - of
which there could not possibly be a better example than programming for the web
in JavaScript. Fortunately, people are starting to get on top of that and
languages like [Elm](https://elm-lang.org/) are starting to have an effect. But it is *amazing* what
we&rsquo;ve forgotten, and if you get a [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk) system out from the 90s and have a
look at what you could do, it just makes you weep when you compare it to trying
to work out how to center a `<div>`.

So students need to have some historical perspectve too. I thnk one of the
issues is that we&rsquo;re purely future-looking - back in the day, we already knew
how to do many things. Elm&rsquo;s a good example - Elm has reinvented Haskell for the web.
And JavaScript was an attempt to get Scheme on the web. So I would encourage
these people to look at the old stuff, not just the new stuff.


# What programming languages have you used and what is your favourite?

I always have trouble with this; the language I can get something done best with
is Python, but the language I *enjoy* programming the most with is [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)).

Since my interest has always been a bit more in the symbolic reasoning
area, the languages I&rsquo;ve used have always been languages like Lisp,
Scheme, Forth and Smalltalk rather than the compiled C world. In
particular, there are two great books - [Structure and Interpretation
of Computer Programs (SICP)](https://mitpress.mit.edu/sites/default/files/sicp/index.html), and [Paradigms of AI Programming (PAIP)](https://en.wikipedia.org/wiki/Paradigms_of_AI_Programming:_Case_Studies_in_Common_Lisp) -
and they&rsquo;re the two best programming books I&rsquo;ve ever read. I really
enjoyed understanding their ideas, and they were both written using
Lisps - SICP in Scheme and PAIP in Common Lisp.

There&rsquo;s another language I&rsquo;ve used and liked called [Tcl](https://www.tcl.tk/), though it&rsquo;s dying. The
reason it&rsquo;s an *amazing* language is that [Tk](https://en.wikipedia.org/wiki/Tk_(software)) is a graphical toolkit and Tcl is a
scripting language. And it was originally written to be embedded in a C program -
so you had your compiled C program running and you embedded the Tcl/Tk
interpreters and libraries in there, and you could call a GUI and script your
program in Tcl/Tk. It&rsquo;s available on all sorts of platforms, and still
maintained and still powerful. I don&rsquo;t use it much now, but I have used it in
the past.



# What&rsquo;s your favourite Lisp dialect?

[Racket](https://racket-lang.org/). I think Racket is a wonderful language, and its libraries are very
&ldquo;batteries-included&rdquo; and complete. There&rsquo;s a good article that I think is a bit
amusing - [Racket is an acceptable Python](https://dustycloud.org/blog/racket-is-an-acceptable-python/). [Racket&rsquo;s macro system](https://docs.racket-lang.org/guide/macros.html) is amazing.
Common Lisp macros are straightforward and powerful but they&rsquo;re &ldquo;non-hygienic&rdquo; -
you can get into trouble with bindings being captured and scope problems can
arise. Racket&rsquo;s macros, done well, guarantee a whole lot properties like
composability and hygiene.



# What would you recommend for medical students beginning to learn programming?

I would be put between Python and Scheme. I would want the syntax to get out of
the way as soon as possible and for there to be minimal surprises. Scheme has no
syntax almost, but the brackets put people off a bit. Python has a few surprises
with scope and default parameters.

I&rsquo;d give people [Visual Studio Code](https://code.visualstudio.com/) - much as I hate to say it - and
install Python, and Racket (with the DrRacket UI). I&rsquo;d get them to
produce a function like an adder. So you&rsquo;re passing around a function.

For example, in Racket, you can do it like so:

```racket
#lang racket

(define (adder n)
    (lambda (m) (+ n m))
)
```

So if I say:

```racket
(define plus-two (adder 2))
```

And then say:

```racket
(plus-two 3)
```


I get 5. So `plus-two` has returned a function which is [closed over](https://en.wikipedia.org/wiki/Closure_(computer_programming)) `n`. And if
I can get medical students to understand that piece of code, I think we&rsquo;re
getting somewhere.

So that&rsquo;s what I think we ought to teach - that&rsquo;s the type of computer science I
think medical students should learn. And if you learn that stuff, you can pick
up languages, that&rsquo;s not a problem. And I think the particulars like how your
IDE works are just ephemera.



# What&rsquo;s your favourite editor? Favourite OS?

My favourite editor is [Emacs](https://www.gnu.org/software/emacs/) - *except* if I&rsquo;m editing text. I&rsquo;m a great
believer of [&ldquo;Emacs is a great operating system, lacking only a decent text
editor&rdquo;](https://en.wikipedia.org/wiki/Editor_war). I use Emacs plus [evil](https://www.emacswiki.org/emacs/Evil) - so I get Vim for my text editing and Emacs for
its customizability and all its modes. And if you&rsquo;re going to program in Lisps,
Emacs just works better. [Org mode](https://orgmode.org/) is also powerful in the Emacs world - I&rsquo;m a
believer in reproducible research, and I think that&rsquo;s one of the key issues in
medicine, so I try to write any analysis code in an `org mode` document with
[org-babel](https://orgmode.org/worg/org-contrib/babel/intro.html).

Evan Misschula has a wonderful [video](https://www.youtube.com/watch?v=CGnt_PWoM5Y&t=1244s) on YouTube where he discussed the
crisis in research that is pushing the reproducible research project.
*Everyone* involved in research and the use and development of tools
needs to watch this.

In terms of OS - MacOS. It gives me solid apps that I have to use in my work,
and they just work - Word works, Excel work, Powerpoint works. Some people don&rsquo;t
like these programs for various reasons, but I think Excel, for example, is a
very good spreadsheet. And [LibreOffice](https://www.libreoffice.org/) just doesn&rsquo;t cut it for me. I&rsquo;ve had
Linux boxes in the past for example, using [Slackware](http://www.slackware.com/) - but Mac just gets the
right balance for me between a Unix environment and a productive office
environment.

