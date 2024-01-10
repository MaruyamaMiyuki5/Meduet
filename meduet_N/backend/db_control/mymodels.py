from sqlalchemy import ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from datetime import datetime
 

class Base(DeclarativeBase):
    pass


class Customers(Base):
    __tablename__ = 'customers_1'
    customer_id:Mapped[int] = mapped_column(primary_key=True)
    customer_name:Mapped[str] = mapped_column()
    age:Mapped[int] = mapped_column()
    birth:Mapped[str] = mapped_column()
    gender:Mapped[str] = mapped_column()
    pregnant:Mapped[str] = mapped_column()
    allergy:Mapped[str] = mapped_column()
    chronic:Mapped[str] = mapped_column()
    medication:Mapped[str] = mapped_column()
    prefecture:Mapped[str] = mapped_column()
    height:Mapped[str] = mapped_column()
    weight:Mapped[str] = mapped_column()

class Customers2(Base):
    __tablename__ = 'customers2'
    customer_id:Mapped[str] = mapped_column(primary_key=True)
    customer_name:Mapped[str] = mapped_column()
    age:Mapped[int] = mapped_column()
    gender:Mapped[str] = mapped_column()
    pregnant:Mapped[str] = mapped_column()
    allergy:Mapped[str] = mapped_column()
    prefecture:Mapped[str] = mapped_column()
    height:Mapped[str] = mapped_column()
    weight:Mapped[str] = mapped_column()

class Customers3(Base):
    __tablename__ = 'symptoms_1'
    symptom_customer_id:Mapped[int] = mapped_column(primary_key=True)
    symptom_id:Mapped[int] = mapped_column()
    customer_id:Mapped[int] = mapped_column()
    symptom:Mapped[str] = mapped_column()
    symptom_part:Mapped[str] = mapped_column()
    symptom_part_from:Mapped[str] = mapped_column()
    symptom_ct:Mapped[int] = mapped_column()
    symptom_size:Mapped[int] = mapped_column()
    symptom_color:Mapped[int] = mapped_column()
    symptom_affect:Mapped[int] = mapped_column()
    symptom_first_time:Mapped[int] = mapped_column()
    problem:Mapped[str] = mapped_column()
    first_effect:Mapped[str] = mapped_column()
    second_effect:Mapped[str] = mapped_column()
    drug_form:Mapped[str] = mapped_column()
    priority_effect_form:Mapped[str] = mapped_column()
    sulfur_smell:Mapped[str] = mapped_column()


class Items(Base):
    __tablename__ = 'items'
    item_id:Mapped[str] = mapped_column(primary_key=True)
    item_name:Mapped[str] = mapped_column()
    price:Mapped[int] = mapped_column()
 

class Purchases(Base):
    __tablename__ = 'purchases'
    purchase_id:Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    purchase_name:Mapped[str] = mapped_column(ForeignKey("customers.customer_id"))
    date:Mapped[datetime] = mapped_column()
 

class PurchaseDetails(Base):
    __tablename__ = 'purchase_details'
    purchase_id:Mapped[int] = mapped_column(ForeignKey("purchases.purchase_id"), primary_key=True)
    item_name:Mapped[str] = mapped_column(ForeignKey("items.item_id"), primary_key=True)
    quantity:Mapped[int] = mapped_column()



 