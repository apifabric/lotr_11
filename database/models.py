# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 30, 2024 08:50:57
# Database: sqlite:////tmp/tmp.KzBq1QyMGI/lotr_11/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Attraction(SAFRSBaseX, Base):
    """
    description: Represents attractions within the theme park.Contains details like name, height requirement, and whether the attraction is operational.
    """
    __tablename__ = 'attraction'
    _s_collection_name = 'Attraction'  # type: ignore
    __bind_key__ = 'None'

    attraction_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    height_requirement_cm = Column(Float)
    is_operational = Column(Boolean)

    # parent relationships (access parent)

    # child relationships (access children)
    MaintenanceList : Mapped[List["Maintenance"]] = relationship(back_populates="attraction")
    RideExperienceList : Mapped[List["RideExperience"]] = relationship(back_populates="attraction")



class Event(SAFRSBaseX, Base):
    """
    description: Defines special events hosted at the park.Stores event details such as name, date, and description.
    """
    __tablename__ = 'event'
    _s_collection_name = 'Event'  # type: ignore
    __bind_key__ = 'None'

    event_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    event_date = Column(DateTime, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ReservationList : Mapped[List["Reservation"]] = relationship(back_populates="event")



class FoodVendor(SAFRSBaseX, Base):
    """
    description: Represents food vendors available at the park.Stores vendor details including name, and specialty cuisine.
    """
    __tablename__ = 'food_vendor'
    _s_collection_name = 'FoodVendor'  # type: ignore
    __bind_key__ = 'None'

    vendor_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    specialty = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    PurchaseList : Mapped[List["Purchase"]] = relationship(back_populates="vendor")



class Merchandise(SAFRSBaseX, Base):
    """
    description: Represents merchandise items sold at the park.Includes details like item name, price, and category.
    """
    __tablename__ = 'merchandise'
    _s_collection_name = 'Merchandise'  # type: ignore
    __bind_key__ = 'None'

    merchandise_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    category = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="merchandise")



class Staff(SAFRSBaseX, Base):
    """
    description: Represents staff members employed at the park.Stores staff details including name, role, and employment date.
    """
    __tablename__ = 'staff'
    _s_collection_name = 'Staff'  # type: ignore
    __bind_key__ = 'None'

    staff_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=False)
    employment_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    MaintenanceList : Mapped[List["Maintenance"]] = relationship(back_populates="staff")



class Ticket(SAFRSBaseX, Base):
    """
    description: Defines the tickets sold for entry to the park.Includes the ticket type and price.
    """
    __tablename__ = 'ticket'
    _s_collection_name = 'Ticket'  # type: ignore
    __bind_key__ = 'None'

    ticket_id = Column(Integer, primary_key=True)
    type = Column(String, nullable=False)
    price = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Visitor(SAFRSBaseX, Base):
    """
    description: Represents visitors to the theme park. Stores visitor information such as name and visit timestamp.
    """
    __tablename__ = 'visitor'
    _s_collection_name = 'Visitor'  # type: ignore
    __bind_key__ = 'None'

    visitor_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    visit_time = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    PurchaseList : Mapped[List["Purchase"]] = relationship(back_populates="visitor")
    ReservationList : Mapped[List["Reservation"]] = relationship(back_populates="visitor")
    RideExperienceList : Mapped[List["RideExperience"]] = relationship(back_populates="visitor")



class Maintenance(SAFRSBaseX, Base):
    """
    description: Records maintenance activities performed on attractions.Captures the date of maintenance, involved staff, and the relevant attraction.
    """
    __tablename__ = 'maintenance'
    _s_collection_name = 'Maintenance'  # type: ignore
    __bind_key__ = 'None'

    maintenance_id = Column(Integer, primary_key=True)
    attraction_id = Column(ForeignKey('attraction.attraction_id'), nullable=False)
    staff_id = Column(ForeignKey('staff.staff_id'), nullable=False)
    maintenance_date = Column(DateTime)

    # parent relationships (access parent)
    attraction : Mapped["Attraction"] = relationship(back_populates=("MaintenanceList"))
    staff : Mapped["Staff"] = relationship(back_populates=("MaintenanceList"))

    # child relationships (access children)



class Purchase(SAFRSBaseX, Base):
    """
    description: Represents food purchase transactions.Contains details like the visitor ID, vendor ID, and purchase timestamp.
    """
    __tablename__ = 'purchase'
    _s_collection_name = 'Purchase'  # type: ignore
    __bind_key__ = 'None'

    purchase_id = Column(Integer, primary_key=True)
    visitor_id = Column(ForeignKey('visitor.visitor_id'), nullable=False)
    vendor_id = Column(ForeignKey('food_vendor.vendor_id'), nullable=False)
    purchase_time = Column(DateTime)

    # parent relationships (access parent)
    vendor : Mapped["FoodVendor"] = relationship(back_populates=("PurchaseList"))
    visitor : Mapped["Visitor"] = relationship(back_populates=("PurchaseList"))

    # child relationships (access children)



class Reservation(SAFRSBaseX, Base):
    """
    description: Represents reservations made by visitors for park events.Includes the visitor ID, event ID, and the reservation timestamp.
    """
    __tablename__ = 'reservation'
    _s_collection_name = 'Reservation'  # type: ignore
    __bind_key__ = 'None'

    reservation_id = Column(Integer, primary_key=True)
    visitor_id = Column(ForeignKey('visitor.visitor_id'), nullable=False)
    event_id = Column(ForeignKey('event.event_id'), nullable=False)
    reservation_time = Column(DateTime)

    # parent relationships (access parent)
    event : Mapped["Event"] = relationship(back_populates=("ReservationList"))
    visitor : Mapped["Visitor"] = relationship(back_populates=("ReservationList"))

    # child relationships (access children)



class RideExperience(SAFRSBaseX, Base):
    """
    description: Captures visitor experiences on rides.Stores details like visitor ID, attraction ID, and rating provided by visitors.
    """
    __tablename__ = 'ride_experience'
    _s_collection_name = 'RideExperience'  # type: ignore
    __bind_key__ = 'None'

    experience_id = Column(Integer, primary_key=True)
    visitor_id = Column(ForeignKey('visitor.visitor_id'), nullable=False)
    attraction_id = Column(ForeignKey('attraction.attraction_id'), nullable=False)
    rating = Column(Integer)

    # parent relationships (access parent)
    attraction : Mapped["Attraction"] = relationship(back_populates=("RideExperienceList"))
    visitor : Mapped["Visitor"] = relationship(back_populates=("RideExperienceList"))

    # child relationships (access children)



class Sale(SAFRSBaseX, Base):
    """
    description: Represents sales transactions for merchandise items.Includes the merchandise ID, quantity sold, and the sale timestamp.
    """
    __tablename__ = 'sale'
    _s_collection_name = 'Sale'  # type: ignore
    __bind_key__ = 'None'

    sale_id = Column(Integer, primary_key=True)
    merchandise_id = Column(ForeignKey('merchandise.merchandise_id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    sale_time = Column(DateTime)

    # parent relationships (access parent)
    merchandise : Mapped["Merchandise"] = relationship(back_populates=("SaleList"))

    # child relationships (access children)
