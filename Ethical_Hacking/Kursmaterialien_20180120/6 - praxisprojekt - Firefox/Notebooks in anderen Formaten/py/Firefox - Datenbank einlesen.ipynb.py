# Diese .py - Datei wurde automatisch aus dem IPython - Notebook (.ipynb) generiert.
# 
# Gelegentlich wurde ich von Teilnehmern gefragt, ob ich die Kursmaterialien nicht 
# auch als normale .py - Datien bereitstellen könne. Dadurch ist es möglich, den Code
# ohne Jupyter zu öffnen, beispielsweise wenn Python-Programme in einem Terminal oder in 
# Eclipse entwickelt werden.
# 
# Dem möchte ich hiermit nachkommen. Ich empfehle dir aber trotzdem, schau' dir lieber die
# IPython - Notebooks direkt an, oder den HTML-Export eben dieser. Dieser reine .py-Export
# ist meiner Meinung nach etwas unübersichtlich.

# coding: utf-8

# In[2]:


from helper import get_firefox_path

path = get_firefox_path("places.sqlite")


# In[3]:


import sqlite3

conn = sqlite3.connect(path)


# In[4]:


print(conn)


# Dokumentation zur places.sqlite: http://kb.mozillazine.org/Places.sqlite

# In[6]:


for row in conn.execute("SELECT * FROM moz_bookmarks"):
    print(row)


